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
mongo = MongoClient(mongodb_url)
db = mongo.foodle
items_col = db.items


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/items/')
def retrieve_items():
    query = items_col.find().limit(5)
    items = []
    for item in query:
        items.append(item)
    response = {'items': items}

    return jsonify(response)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
