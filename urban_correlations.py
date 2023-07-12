
import numpy as np
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd

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
    date_list = []
    any_opioid = []
    death_city = []
    latitude = []
    longitude = []
    percent_affordable = []

    for x in results:
# go through the returned cursor and create a pandas dataframe out of it     
#     print(x[0])
# get the return cursor build lists for our dictionary     
     date_list.append(x[0])
     any_opioid.append(x[1])
     death_city.append(x[2])
     latitude.append(x[3])
     longitude.append(x[4])
     percent_affordable.append(x[5])

    print(len(percent_affordable))   
#create the data frame based on our lists of information from the OD database view 
#overdose_urban.
    opioid_od = {"date":date_list,"any_opioid":any_opioid,"death_city":death_city,"latitude":latitude
                 ,"longitude":longitude,"percent_affordable":percent_affordable}
    opioid_df = pd.DataFrame(opioid_od)
 #change the any opioid to a summable value or 1 as it is one reported death in the timeseries.   
    opioid_df['any_opioid'] = opioid_df['any_opioid'].map({'Y': 1})
#    print(opioid_df.head(10))

    summed_df = opioid_df.groupby(["death_city",'percent_affordable']).aggregate({"any_opioid":"sum"}).sort_values(by="any_opioid",ascending=False)
#sort 
    print(summed_df.head())
# Convert list of tup
    # les into normal list
#    towns = list(np.ravel(results))
    return render_template("index.html",var_html=opioid_df)
#    return jsonify(opioid_od)

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)

