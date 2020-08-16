import flask
from flask_cors import CORS

app = flask.Flask(__name__)
app.config["DEBUG"] = True

CORS(app)

@app.route('/', methods= ['GET'])

def home():
    return "<p> Hello World </p>"

app.run()
