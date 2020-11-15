from flask import Flask
from flask import request
import pymongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/modlogin")
def modlogin():
    return "Hello World"

@app.route("/modpage")
def modlogin2():
    return "Hello World"


@app.route("/gamepage")
def index2():
    return "Hi lol"

@app.route("/submission_truth", methods=["GET", "POST"])
def index3():
    print(request.get_json())
    return ""

if __name__ == "__main__":
    app.run(debug=True)

