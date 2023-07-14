from flask import Blueprint

from .auth_routes import auth_routes
from .product_routes import product_routes
from .user_routes import user_routes
from .item_type_routes import item_type_routes
from .seed_routes import seed_routes

# Blueprint for api routes
api = Blueprint('api', __name__)

# Add all routes from other blueprints here
api.register_blueprint(auth_routes, url_prefix='/auth')
api.register_blueprint(seed_routes, url_prefix='/seed')
api.register_blueprint(user_routes, url_prefix='/users')
api.register_blueprint(product_routes, url_prefix='/products')
api.register_blueprint(item_type_routes, url_prefix='/item_types')
