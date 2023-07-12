from app.models import db, environment, SCHEMA, add_prefix_for_prod


class Product(db.Model):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(90), nullable=False, unique=True)
    type = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('item_types.id')), nullable=False)
    description = db.Column(db.String(255))
    sqft_per_unit = db.Column(db.Numeric(asdecimal=False), default=0)

    purchases = db.relationship('Purchase', back_populates='product')
    item_type = db.relationship('ItemType', back_populates='items')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'description': self.description,
            'total_cost': self.total_cost(),
            'quantity_on_hand': self.quantity_on_hand(),
            'sqft_per_unit': self.sqft_per_unit,
        }

    def to_dict_all(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.item_type.to_dict(),
            'description': self.description,
            'total_cost': self.total_cost(),
            'quantity_on_hand': self.quantity_on_hand(),
            'sqft_per_unit': self.sqft_per_unit,
            'purchases': [purchase.to_dict() for purchase in self.purchases],
        }

    def quantity_on_hand(self):
        quantity = 0
        for purchase in self.purchases:
            quantity += purchase.quantity
        return quantity

    def total_cost(self):
        total_cost = 0
        for purchase in self.purchases:
            total_cost += purchase.cost
        return total_cost
