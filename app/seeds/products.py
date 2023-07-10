from app.models import db, Product
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

products = [
    {
        "name": "EZ-Tique - mocha",
        "type": 1,
        "description": "Antique concrete stain"
    },
    {
        "name": "Sealer",
        "type": 1,
        "description": "Concrete sealer"
    },
    {
        "name": "Gasoline",
        "type": 1,
        "description": "Gasoline"
    },
    {
        "name": "Backer Rod",
        "type": 3,
        "description": "1/2 inch backer rod"
    },
    {
        "name": "Paint Roller",
        "type": 4,
        "description": "9 inch paint roller"
    },
    {
        "name": "Paint Tray",
        "type": 4,
        "description": "9 inch paint tray"
    },
    {
        "name": "Rags",
        "type": 4,
        "description": "rags for cleaning"
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
