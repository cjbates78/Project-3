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

Possible source for the data
1. CDC
2. Data.gov
3. AOS data from https://github.com/michalsnik/aos/tree/next
4. Pciture from Getty Images

# Notes:

# Relational Database creation
The file QuickDBD-export.sql was done by https://app.quickdatabasediagrams.com/#/
Then exported. However, after data analsis of our csv and cleaned data from Pandas we had to adjust this into another sql file called Create_Over_Dose_Table.sql.  This file is located in the \Resources folder.

After we created the table we imported the OD_data.csv using the import source.  Make sure we have headers set and , are the delimiters. 
