from flask import Blueprint
from app.models import db, ItemType

item_type_routes = Blueprint('types', __name__)


@item_type_routes.route('/')
def get_types():
    return {type.id: type.to_dict() for type in ItemType.query.all()}


@item_type_routes.route('/<int:id>')
def get_type(id):
    return ItemType.query.get(id).to_dict()


@item_type_routes.route('/<int:id>/products')
def get_type_products(id):
    type = ItemType.query.get(id)
    return {product.id: product.to_dict() for product in type.items}
