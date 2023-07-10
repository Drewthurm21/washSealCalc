from app.models import db, Purchase, Product
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

product_purchases = [
    {
        "product_id": 1,
        "user_id": 1,
        "cost": 38.00,
        "quantity": 3,
    },
    {
        "product_id": 2,
        "user_id": 1,
        "cost": 149.00,
        "quantity": 5,
    },
    {
        "product_id": 3,
        "user_id": 1,
        "cost": 15.00,
        "quantity": 5,
    },
    {
        "product_id": 4,
        "user_id": 1,
        "cost": 4.27,
        "quantity": 20,
    },
    {
        "product_id": 5,
        "user_id": 1,
        "cost": 10.48,
        "quantity": 3,
    },
    {
        "product_id": 6,
        "user_id": 1,
        "cost": 5.98,
        "quantity": 3,
    },
    {
        "product_id": 7,
        "user_id": 1,
        "cost": 13.98,
        "quantity": 200,
    }
]


def seed_purchases():
    for product_purchase in product_purchases:
        demo = Purchase(**product_purchase)
        db.session.add(demo)
    db.session.commit()


# Uses proper command for production vs local
# production is a postgres database on Render.com, local is sqlite
def undo_purchases():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.purchases RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM purchases")

    db.session.commit()