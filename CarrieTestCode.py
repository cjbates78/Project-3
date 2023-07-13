import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify

engine = create_engine('postgresql+psycopg2://postgres:Carrie1234@localhost/Project_Three')

Base = automap_base()
Base.prepare(autoload_with=engine)
print(str(Base.classes.keys()))
over_dose = Base.classes.overdose

app = Flask(__name__)

@app.route("/")
def index():
    session = Session(engine)
    results = session.query(over_dose.deathcity).filter(over_dose.deathcity == 'WINDSOR LOCKS').all()
