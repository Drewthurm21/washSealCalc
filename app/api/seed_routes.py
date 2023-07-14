from flask import Blueprint
from flask_login import login_required
from app.models import db, Product, ItemType, Purchase
from app.seeds.products import products
from app.seeds.item_types import item_types
from app.seeds.purchases import product_purchases

seed_routes = Blueprint('seed', __name__)


@seed_routes.route('/seed_products')
@login_required
def seed_products():
    for product in products:
        db.session.add(Product(**product))
    db.session.commit()
    return {'message': 'Products seeded'}


@seed_routes.route('/undo_products')
@login_required
def undo_products():
    for product in Product.query.all():
        db.session.delete(product)
    db.session.commit()
    return {'message': 'Products undone'}


@seed_routes.route('/seed_types')
@login_required
def seed_types():
    for item_type in item_types:
        type = ItemType(**item_type)
        print(type.to_dict())
        db.session.add(type)
    db.session.commit()
    return {'message': 'Types seeded'}


@seed_routes.route('/undo_types')
@login_required
def undo_types():
    for item_type in ItemType.query.all():
        db.session.delete(item_type)
    db.session.commit()
    return {'message': 'Types undone'}


@seed_routes.route('/seed_purchases')
@login_required
def seed_purchases():
    for purchase in product_purchases:
        db.session.add(Purchase(**purchase))
    db.session.commit()
    return {'message': 'Purchases seeded'}


@seed_routes.route('/undo_purchases')
@login_required
def undo_purchases():
    for purchase in Purchase.query.all():
        db.session.delete(purchase)
    db.session.commit()
    return {'message': 'Purchases undone'}


@seed_routes.route('/hello')
def hello():
    return {'message': 'Hello World'}
