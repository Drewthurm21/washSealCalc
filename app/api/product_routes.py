from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import ItemType, Purchase, Product

product_routes = Blueprint('products', __name__)


@product_routes.route('/')
@login_required
def products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}


@product_routes.route('/types')
@login_required
def product_types():
    return {type.id: type.to_dict() for type in ItemType.query.all()}


@product_routes.route('/<int:id>')
@login_required
def product(id):
    product = Product.query.get(id)
    return product.to_dict()


@product_routes.route('/<int:id>/purchases')
@login_required
def product_purchases(id):
    product = Product.query.get(id)
    return {purchase.id: purchase.to_dict() for purchase in product.purchases}
