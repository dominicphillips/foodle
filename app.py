from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient, GEOSPHERE
from bson.son import SON
import math

import ConfigParser

app = Flask(__name__)
app.debug = True

#read config file
config = ConfigParser.ConfigParser()
config.read('foodle.ini')
mongodb_url = config.get('MongoDB', 'url')

#db init
mongo = MongoClient(mongodb_url)
db = mongo.foodle
col_dishes = db.dishes
col_restaurants = db.restaurants
col_restaurants.ensure_index([("location", GEOSPHERE)])

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
                restaurant.update({'distance': math.ceil(result['dis'])})
                items.append(restaurant)
    return jsonify({"items": items})


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
