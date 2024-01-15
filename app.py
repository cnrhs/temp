from flask import Flask, render_template


app = Flask(__name__)


@app.route("/", methods=["GET"])
def application():
    return render_template("app.html")
