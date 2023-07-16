import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify

engine = create_engine('postgresql+psycopg2://postgres:Glen032501@localhost/Project-3')

Base = automap_base()

Base.prepare(autoload_with=engine)

over_dose = Base.classes.overdose

app = Flask(__name__)

@app.route("/")
def index():
    session = Session(engine)
    results = session.query(over_dose.anyopioid, over_dose.longitude, over_dose.latitude).filter(over_dose.anyopioid == 'Y').all()
    session.close()

    doses = list(np.ravel(results))
    return jsonify(doses)

if __name__ == "__main__":
    app.run(debug=True)