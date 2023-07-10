from app.models import db, Product, SCHEMA, environment, add_prefix_for_prod


class Purchase(db.Model):
    __tablename__ = 'purchases'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('products.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    cost = db.Column(db.Numeric(asdecimal=False), nullable=False)
    quantity = db.Column(db.Numeric(asdecimal=False), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    product = db.relationship('Product', back_populates='purchases')
    user = db.relationship('User', back_populates='purchases')

    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'user_id': self.user_id,
            'cost': self.cost,
            'quantity': self.quantity,
        }

    def to_dict_with_product(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'user_id': self.user_id,
            'cost': self.cost,
            'quantity': self.quantity,
            'product': self.product.to_dict(),
        }
