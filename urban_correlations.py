
import numpy as np
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify,render_template


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################
#print(sqlalchemy.__version__)

@app.route("/")
#################################################
# Database Setup
#################################################


def index():
    Base = automap_base()

    connection = psycopg2.connect( user="postgres",password="Corey1234",host="127.0.0.1",port="5432",database="Project_Three")
    cursor = connection.cursor()

    # Query all passengers
    urban_data = "SELECT * FROM overdose_urban"
    cursor.execute(urban_data)
    results = cursor.fetchall()

    opioid_od = {}

    for x in results:
     print(x)
    
 #   print(len(opioid_od))
# Convert list of tup
    # les into normal list
    towns = list(np.ravel(results))
#    return render_template("index.html",var_html=results)
    return jsonify(towns)

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)

