from flask.cli import AppGroup
from app.models import environment
from .users import seed_users, undo_users
from .item_types import seed_types, undo_types
from .products import seed_products, undo_products
from .purchases import seed_purchases, undo_purchases

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    # clear tables before seeding in production
    if environment == 'production':
        undo()
    seed_users()
    seed_types()
    seed_products()
    seed_purchases()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_purchases()
    undo_products()
    undo_types()
    undo_users()
