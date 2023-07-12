from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Product
from app.forms import ProductForm

product_routes = Blueprint('products', __name__)

# GET /api/products


@product_routes.route('/')
def products():
    return {product.id: product.to_dict_all() for product in Product.query.all()}


@product_routes.route('/<int:id>')
def product(id):
    product = Product.query.get(id)
    return product.to_dict()


@product_routes.route('/<int:id>/purchases')
def product_purchases(id):
    product = Product.query.get(id)
    return {purchase.id: purchase.to_dict() for purchase in product.purchases}


# POST /api/products

@product_routes.route('/', methods=['POST'])
@login_required
def create_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product(**request.json)
        db.session.add(product)
        db.session.commit()
        return product.to_dict()
    return {'errors': (form.errors)}, 401
