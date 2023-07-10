from app.models import db, User
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")
user_info = os.environ.get("USERINFO")

username, email, password = user_info.split(",")


def seed_users():
    demo = User(username=username, email=email, password=password)
    db.session.add(demo)
    db.session.commit()


# Uses proper command for production vs local
# production is a postgres database on Render.com, local is sqlite
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
