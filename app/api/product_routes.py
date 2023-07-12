from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product

product_routes = Blueprint('products', __name__)

# GET /api/products


@product_routes.route('/')
def products():
    return {product.id: product.to_dict_all() for product in Product.query.all()}


@product_routes.route('/test')
def products_test():
    product = Product.query.first()
    return product.to_dict_all()


@product_routes.route('/<int:id>')
def product(id):
    product = Product.query.get(id)
    return product.to_dict()


@product_routes.route('/<int:id>/purchases')
def product_purchases(id):
    product = Product.query.get(id)
    return {purchase.id: purchase.to_dict() for purchase in product.purchases}


# POST /api/products
