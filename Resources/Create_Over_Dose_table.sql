CREATE TABLE OverDose (
    "OpId" INTEGER   NOT NULL,
    "Date" date   NOT NULL,
    "DateType" varchar(25)   ,
    "Age" float  NOT NULL,
    "Sex" varchar(10)   ,
    "Race" varchar(50)  ,
    "Ethnicity" varchar(100)   ,
    "ResidenceCity" varchar(50)   ,
    "ResidenceCounty" varchar(50)   ,
    "ResidenceState" varchar(50)  ,
    "InjuryCity" varchar(50)   ,
    "InjuryCounty" varchar(50)   ,
    "InjuryState" varchar(50)   ,
    "InjuryPlace" varchar(150)   ,
    "DescriptionofInjury" varchar(500)   ,
    "DeathCity" varchar(50)  ,
    "DeathCounty" varchar(50)   ,
    "DeathState" varchar(50)   ,
    "Location" varchar(200)   ,
    "LocationifOther" varchar(200)   ,
    "CauseofDeath" varchar(500)   ,
    "MannerofDeath" varchar(50)   ,
    "OtherSignificantConditions" varchar(100)  ,
    "Heroin" varchar(15)   ,
    "Heroindeathcertificate(DC)" varchar(15)   ,
    "Cocaine" varchar(15)   ,
    "Fentanyl" varchar(15)  ,
    "FentanylAnalogue" varchar(15)   ,
    "Oxycodone" varchar(15)   ,
    "Oxymorphone" varchar(15) ,
    "Ethanol" varchar(15)  ,
    "Hydrocodone" varchar(15)   ,
    "Benzodiazepine" varchar(15) ,
    "Methadone" varchar(15) ,
    "Meth/Amphetamine" varchar(15) ,
    "Amphet" varchar(15)   ,
    "Tramad" varchar(15)   ,
    "Hydromorphone" varchar(15)   ,
    "Morphine(NotHeroin)" varchar(25)  ,
    "Xylazine" varchar(15)  ,
    "Gabapentin" varchar(15)  ,
    "OpiateNOS" varchar(15)   ,
    "Heroin/Morph/Codeine" varchar(15)  ,
    "OtherOpioid" varchar(50)  ,
    "AnyOpioid" varchar(15)   ,
    "Other" varchar(150)   ,
    "DeathCityGeo" varchar(150)   ,
    "latitude" varchar(20),
    "longitude" varchar(20),
    CONSTRAINT "pk_OverDose" PRIMARY KEY (
        "OpId"
     )
);

Select * from overdose;