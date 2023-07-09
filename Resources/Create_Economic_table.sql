CREATE TABLE economic (
 Years date not null,
 TownCode int,
 Town varchar (250),
 CensusUnits int,
 GovernmentAssisted int,
 TenantRentalAssistance int,
 SingleFamilyMortgages int,
 DeedRestrictedUnits int,
 TotalAssistedUnits int,
 PercentAffordable float
);

Select * from economic;