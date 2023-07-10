from app.models import db, ItemType
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

item_types = [
    {
        "name": "liquid",
        "description": "a liquid material",
        "measurement_unit": "gallon",
        "measurement_unit_abbreviation": "gal",
    },
    {
        "name": "solid",
        "description": "A solid material",
        "measurement_unit": "pound",
        "measurement_unit_abbreviation": "lb",
    },
    {
        "name": "length",
        "description": "A length of material",
        "measurement_unit": "foot",
        "measurement_unit_abbreviation": "ft",
    },
    {
        "name": "miscellaneous",
        "description": "A miscellaneous item",
        "measurement_unit": "each",
        "measurement_unit_abbreviation": "ea",
    },
]


def seed_types():
    for item_type in item_types:
        type = ItemType(**item_type)
        db.session.add(type)
    db.session.commit()


# Uses proper command for production vs local
# production is a postgres database on Render.com, local is sqlite
def undo_types():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.item_types RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM item_types")

    db.session.commit()
