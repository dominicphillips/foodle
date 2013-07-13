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


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/dishes/')
def retrieve_dishes():
    dishes = col_dishes.find().limit(5)
    items = []
    for dish in dishes:
        items.append(dish)
    response = {'items': items}

    return jsonify(response)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
