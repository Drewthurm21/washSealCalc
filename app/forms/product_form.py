from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired

options = [
    (1, '1'),
    (2, '2'),
    (3, '3'),
    (4, '4'),
]


class ProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    type = IntegerField('type',  validators=[DataRequired()])
    sqft_per_unit = IntegerField('sqft_per_unit', validators=[DataRequired()])
