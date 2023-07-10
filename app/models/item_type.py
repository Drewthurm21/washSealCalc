from app.models import db, environment, SCHEMA


class ItemType(db.Model):
    __tablename__ = 'item_types'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(90), nullable=False, unique=True)
    description = db.Column(db.String(255))
    measurement_unit = db.Column(db.String(90), nullable=False)
    measurement_unit_abbreviation = db.Column(db.String(90), nullable=False)

    items = db.relationship('Product', back_populates='item_type')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'measurement_unit': self.measurement_unit,
            'measurement_unit_abbreviation': self.measurement_unit_abbreviation,
        }
