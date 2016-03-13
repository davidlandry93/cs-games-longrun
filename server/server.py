#!/usr/bin/env python3

import flask
from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/suggestions', methods=['POST'])
def suggestions():
    print(request.json)
    return flask.jsonify(**{'suggestion': 123})

if __name__ == '__main__':
    app.run()
