from flask_sqlalchemy import SQLAlchemy
import os

SCHEMA = os.environ.get("SCHEMA")
environment = os.getenv("FLASK_ENV")

db = SQLAlchemy()


# set environment variable in production on Render.com
def add_prefix_for_prod(attr):
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr
