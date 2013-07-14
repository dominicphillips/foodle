from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient, GEOSPHERE
from bson.son import SON
from werkzeug.contrib.fixers import ProxyFix
import math

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


@app.route('/')
def index():
    return render_template('index.html')


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
    return jsonify({'items': dish})


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
