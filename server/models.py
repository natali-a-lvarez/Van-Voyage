# database models
from config import db

class Van(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    price = db.Column(db.SmallInteger(), unique=False, nullable=False)
    location = db.Column(db.String(255), unique=False, nullable=False)
    miles = db.Column(db.SmallInteger(), unique=False, nullable=False)
    kitchen = db.Column(db.Boolean(), unique=False, nullable=False)
    bathroom = db.Column(db.Boolean(), unique=False, nullable=False)
    sleeps = db.Column(db.SmallInteger(), unique=False, nullable=False)
    seats = db.Column(db.SmallInteger(), unique=False, nullable=False)
    water = db.Column(db.Boolean(), unique=False, nullable=False)
    length = db.Column(db.SmallInteger(), unique=False, nullable=False)
    imgUrl = db.Column(db.String(255), unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    available = db.Column(db.Boolean(), unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "location": self.location,
            "miles": self.miles,
            "kitchen": self.kitchen,
            "bathroom": self.bathroom,
            "sleeps": self.sleeps,
            "seats": self.seats,
            "water": self.water,
            "length": self.length,
            "imgUrl": self.imgUrl,
            "description": self.description,
            "available": self.available
        }