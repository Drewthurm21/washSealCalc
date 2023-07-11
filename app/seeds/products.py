from app.models import db, Product
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

products = [
    {
        "name": "Gasoline",
        "type": 1,
        "description": "Gasoline",
        "sqft_per_unit": 0,
    },
    {
        "name": "Sealer",
        "type": 1,
        "description": "Concrete sealer",
        "sqft_per_unit": 200,
    },
    {
        "name": "EZ-Tique - mocha",
        "type": 2,
        "description": "Antique concrete stain",
        "sqft_per_unit": 850,
    },
    {
        "name": "Backer Rod",
        "type": 3,
        "description": "1/2 inch backer rod",
        "sqft_per_unit": 0.25,
    },
    {
        "name": "Paint Roller",
        "type": 4,
        "description": "9 inch paint roller",
        "sqft_per_unit": 1000,
    },
    {
        "name": "Paint Tray",
        "type": 4,
        "description": "9 inch paint tray",
        "sqft_per_unit": 1000,
    },
    {
        "name": "Rags",
        "type": 4,
        "description": "rags for cleaning",
        "sqft_per_unit": 20,
    },
]


def seed_products():
    for product in products:
        demo = Product(**product)
        db.session.add(demo)
    db.session.commit()


# Uses proper command for production vs local
# production is a postgres database on Render.com, local is sqlite
def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
