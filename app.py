from flask import Flask, render_template, jsonify, request
from flask.ext.login import LoginManager
from pymongo import MongoClient, GEOSPHERE
from bson.son import SON
from werkzeug.contrib.fixers import ProxyFix
from werkzeug.security import generate_password_hash, \
    check_password_hash

import math
import re
import ConfigParser

app = Flask(__name__)
app.debug = True

#read config file
config = ConfigParser.ConfigParser()
config.read('foodle.ini')
mongodb_url = config.get('MongoDB', 'url')

#db init
mongo = MongoClient('localhost', 27017)
db = mongo.foodle
col_dishes = db.dishes
col_restaurants = db.restaurants
col_restaurants.ensure_index([("location", GEOSPHERE)])
col_users = db.users

login_manager = LoginManager()


class User(object):
    def __init__(self, name, email, passwd):
        self.name = name
        self.email = email
        self.set_passwd = passwd

    def set_passwd(self, passwd):
        self.pw_hash = generate_password_hash(passwd)

    def check_passwd(self, passwd):
        return check_password_hash(self.pw_hash, passwd)

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.email


@login_manager.user_loader
def load_user(email):
    existing_user = col_users.find_one({'email': email})
    if not existing_user:
        return None


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/users/register/')
def register_user():
    if request.form and request.form.name and request.form.email and request.form.password:
        form_data = request.form
        form_name = form_data.name[0]
        form_email = form_data.email[0]
        form_pwd = form_data.password[0]
        existing_user = col_users.find_one({'email': form_email})
        if existing_user:
            return jsonify({
                'status': 'error',
                'msg': "This e-mail is already registered!"
            })
        else:
            return jsonify({
                'status': 'error',
                'msg': "Please fill out all fields!"
            })
    else:
        user = {
            'name': form_name,
            'email': form_email,
            'pwd': generate_password_hash(form_pwd)
        }
        col_users.insert(user)
        return jsonify({'status': 'success'})


@app.route('/api/users/login/')
def login_user():
    if request.form and request.form.login and request.form.password:
        login = request.form.login
        password = request.form.password
        if not re.match(r"^[A-Za-z0-9\.\+_-]+@[A-Za-z0-9\._-]+\.[a-zA-Z]*$", login):
            user = col_users.fetch_one({'name': login})
            if user and (user.pwd == check_password_hash(user.pwd, password)):
                pass
        else:
            pass #TODO

    else:
        return jsonify({
            'status': 'error',
            'msg': "Sorry, something went wrong!"
        })


@app.route('/api/dishes/')
def retrieve_dishes():
    lng = request.args.get('lng')
    lat = request.args.get('lat')
    items = []
    if lng is not None and lat is not None:
        query = db.command(SON([('geoNear', 'restaurants'), ('near', [float(lng), float(lat)]), ('spherical', 'true'), ('distanceMultiplier', (6371000))]))
        results = query['results']
        for result in results:
                restaurant = result['obj']
                restaurant.update({'distance': int(math.ceil(result['dis']))})
                dishes = col_dishes.find({'restaurant': restaurant['_id']})
                for dish in dishes:
                    dish.update({'restaurant': restaurant})
                    items.append(dish)
    return jsonify({'items': items})


@app.route('/api/dishes/<int:dish_id>/')
def retrieve_dish(dish_id):
    lng = request.args.get('lng')
    lat = request.args.get('lat')
    if lng is not None and lat is not None:
        dish = col_dishes.find_one({'_id': dish_id})
        restaurant_id = dish['restaurant']
        query = db.command(SON([('geoNear', 'restaurants'), ('near', [float(lng), float(lat)]), ('query', {'_id': restaurant_id}), ('spherical', 'true'), ('distanceMultiplier', (6371000))]))
        results = query['results']
        restaurant = results[0]['obj']
        restaurant.update({'distance': int(math.ceil(results[0]['dis']))})
    dish.update({'restaurant': restaurant})
    return jsonify(dish)


@app.route('/api/dishes/<int:dish_id>/rate/')
def rate_dish(dish_id):
    user_rating = int(request.args.get('rating'))
    if user_rating > 5:
        user_rating = 5
    elif user_rating < 1:
        user_rating = 1
    col_dishes.update({'_id': dish_id}, {'$push': {'ratings': user_rating}})
    dish = col_dishes.find_one({'_id': dish_id})
    dish_ratings = dish['ratings']
    _sum = 0
    count = len(dish_ratings) if dish_ratings else 1
    for dish_rating in dish_ratings:
        _sum += dish_rating
    rating = int(round(_sum/count))
    dish.update({'rating': rating})
    col_dishes.update({'_id': dish_id}, {'$set': {'user_rating': rating}})
    return jsonify({'items': dish})


@app.route('/api/restaurants/')
def retrieve_restaurants():
    lng = request.args.get('lng')
    lat = request.args.get('lat')
    items = []
    if lng is not None and lat is not None:
        query = db.command(SON([('geoNear', 'restaurants'), ('near', [float(lng), float(lat)]), ('spherical', 'true'), ('distanceMultiplier', (6371000))]))
        results = query['results']
        for result in results:
                restaurant = result['obj']
                restaurant.update({'distance': int(math.ceil(result['dis']))})
                items.append(restaurant)
    return jsonify({'items': items})


@app.route('/api/restaurants/<int:restaurant_id>/')
def retrieve_restaurant(restaurant_id):
    items = []
    restaurant = col_restaurants.find_one({'_id': restaurant_id})
    dishes = col_dishes.find({'restaurant': restaurant_id})
    for dish in dishes:
        items.append(dish)
    restaurant.update({'dishes': items})
    return jsonify({'items': restaurant})


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


app.wsgi_app = ProxyFix(app.wsgi_app)


if __name__ == '__main__':
    app.run()
