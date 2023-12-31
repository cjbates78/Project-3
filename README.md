# Project-3
Project scope:
The aim of our project is to uncover patterns of drug overdoeses in Connecticut. We’ll examine relationships between types of drugs, ages groups, gender and other related relationships derived from the data, within Connecticut.

Project Purpose:
The kind of data you’d like to work with and the field you’re interested in (finance, healthcare surveys, etc.)
1. Heathcare surveys
2. National Center for Health Statistics - Mortality data

The questions you’ll ask of the data
1. Which age group has the highest amount of overdoses per year
2. Do males or females have a greater amount of overdoses per year, and by what percentage
3. Top three counties for overdoses compared to median income of county
4. what are the top 5 opioids find in autopsy reports

Possible source for the data
1. CDC
2. Data.gov
3. AOS data from https://github.com/michalsnik/aos/tree/next
4. Picture from Getty Images
5. geojson.io


# Notes:

# Relational Database creation
The file QuickDBD-export.sql was done by https://app.quickdatabasediagrams.com/#/
Then exported. However, after data analsis of our csv and cleaned data from Pandas we had to adjust this into another sql file called Create_Over_Dose_Table.sql.  This file is located in the \Resources folder.
# *Notice the csv files for import were cleaned by the two juypter note books before import into the Relational Database Management System.
1. CleanData1.pynb that uses the Connecticut overdose csv file to create OD_Data.csv
2. CleanAffordableHousing.ipyb that uses the affordable housing csv file to create clean_housing.csv

To create the Relational database:
1. Open postGreSQL 12 log in and create database named Project_Three
2. Run the scripts in order: /Resources_/create_overdose.sql , /Rescources/Create_Economic_table.sql,
3. Then using the import tool of PostGRESQL import the /Resources/OD_Data.csv into table overdose and then import /Resources/clean_housing.csv into the economic table using the import csv tool.
4. To create the veiw for the web application, run the script /Resources/View_and_Left_Join_query.sql 
Please run the query first to make sure data returns and then created the view for report and further analysis.

# The Flask Web Application uses templates and is located in the templates folder
/templates/index.html
The program runner is at the main level of the project in the python file urban_correlations.py
The application uses Pandas Dataframes and correlations function to calculate the r2 or correlations percents as we compared opiod over dose deaths vs affordable housing concentrations.
# *Notice index.html in the resources file has script variables that get passed from the urban_correlations.py

# The web site was built
Webpage_index.html was build using https://github.com/michalsnik/aos as a resource. We built the a header, using a piture from Getty Images and the JavaScript AOS library for the data visualizations.

# Top 5 Drug visual
1. 5 Deadlist Drug visual was build using the information from the LinePlots.js file, and ploting it with a Plotly linegraph

# Percentage of males or females overdose death count in connecticut
1. use geojson.io to find the latitude and longitude of county in connecticut
2. Extract the data of the count of male and female from pandas dataframe
3. barchart for the overdose death count in each county in connecticut 2022
 
![image](https://github.com/cjbates78/Project-3/assets/117419179/06d1c1eb-6991-4819-bf7f-a48424784acc)


4.pie chart for males vs females death percent in connecticut 2022

   
![image](https://github.com/cjbates78/Project-3/assets/117419179/b0670d0e-3393-4ab6-a7d9-edf5481bd519)

5. male_femaledata | index1 html | link for Leaflet marker map:
   http://127.0.0.1:5500/project3/Project-3/male_femaledata/index1.html

