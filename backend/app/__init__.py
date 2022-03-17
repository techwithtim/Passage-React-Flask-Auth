from flask import Flask


def create_app():
    app = Flask(__name__)

    from .main import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    return app
