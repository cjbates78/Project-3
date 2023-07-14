
import numpy as np
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd

from flask import Flask, jsonify, render_template


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################


@app.route("/")
#################################################
# Database Setup
#################################################
def index():
    Base = automap_base()

    connection = psycopg2.connect(user="postgres", password="Corey1234",
                                  host="127.0.0.1", port="5432", database="Project_Three")
    cursor = connection.cursor()

    # Query all passengers
    urban_data = "SELECT * FROM overdose_urban"
    cursor.execute(urban_data)
    results = cursor.fetchall()

    opioid_od = {}  # opoid od dictionary
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

#    print(len(percent_affordable))
# create the data frame based on our lists of information from the OD database view
# overdose_urban.
    opioid_od = {"date": date_list, "any_opioid": any_opioid, "death_city": death_city,
                 "latitude": latitude, "longitude": longitude, "percent_affordable": percent_affordable}
    opioid_df = pd.DataFrame(opioid_od)
 # change the any opioid to a summable value or 1 as it is one reported death in the timeseries.
    opioid_df['any_opioid'] = opioid_df['any_opioid'].map({'Y': 1})
 #   print(opioid_df.head(10))

#need to sum the opioid deaths by town    
    summed_opioids_df = opioid_df.groupby("death_city",as_index=False).sum()
# drop the summed percentages.
# drop('column_name', axis=1)
    summed_opioids_df.sort_values(by="any_opioid", ascending=False)
#    print(summed_opioids_df.head())

#pull out the correlations 
    correlations = summed_opioids_df.corr()
    opioid_cor = correlations["any_opioid"].values

    percent_aff = correlations["percent_affordable"].values
    affordable_h = opioid_df["percent_affordable"].values
    death_c = summed_opioids_df["death_city"].values
    opiod_s = summed_opioids_df["any_opioid"].values
    
 #final data frame 
    one_list = summed_opioids_df.values.tolist()
    return render_template("index.html",opiod_death=one_list,opiods=opioid_cor,percent_house=percent_aff)

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
