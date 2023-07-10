from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Purchase, Product

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/purchases')
@login_required
def user_purchases(id):
    user = User.query.get(id)
    return {'purchases': [purchase.to_dict_with_product() for purchase in user.purchases]}
