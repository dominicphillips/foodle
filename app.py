from flask import Flask, render_template
from flask import jsonify
from pymongo import MongoClient

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


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/dishes/')
def retrieve_dishes():
    items = []
    restaurants = col_restaurants.find()
    for restaurant in restaurants:
        dishes = col_dishes.find({'restaurant': restaurant['_id']})
        for dish in dishes:
            dish.update({'restaurant': restaurant})
            items.append(dish)
    return jsonify({'items': items})


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
