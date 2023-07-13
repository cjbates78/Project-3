/*
* Authors: A Jenkens, Carrie Bates, Corey MOnsma, Parker Tyske, Stargly Bobby
* the basis of the view.
*/
-- Join overdose table on the afforable housing table or economic table based on deathcity
SELECT overdose.date, 
  overdose.age, 
  overdose.sex, 
  overdose.race, 
  overdose.deathcity,
  economic.percentaffordable
FROM overdose
LEFT JOIN economic ON
overdose.deathcity = economic.deathcity
  where overdose.deathcity != 'N'
   ORDER BY date DESC;
   
-- Create the view based on the joi-- Create View
-- Create View
CREATE VIEW overdose_afforable_housing AS
SELECT overdose.date, 
  overdose.age, 
  overdose.sex, 
  overdose.race, 
  overdose.deathcity,
  economic.percentaffordable
FROM overdose
LEFT JOIN economic ON
overdose.deathcity = economic.deathcity
  where overdose.deathcity != 'N'
   ORDER BY date DESC;
   
select * from overdose_afforable_housing;   


-- Create View
CREATE VIEW overdose_urban AS
select overdose.date,
	   overdose.anyopioid,
	   overdose.deathcity,
	   overdose.latitude,
	   overdose.longitude,
	   economic.percentaffordable
FROM overdose
INNER JOIN economic ON
overdose.deathcity = economic.deathcity
  where overdose.deathcity != 'N'
   and overdose.anyopioid = 'Y'
    order by overdose.date DESC;