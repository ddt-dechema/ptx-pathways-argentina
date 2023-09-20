# Live Preview
https://ddt-dechema.github.io/ptx-pathways-argentina/

# ptx-pathways-argentina
interactive web map to display CO2 sources in Argentina - Part of the PtX Hub project "PtX Pathways"

# Aim


# convert excel to CSV to geojson
1. create the csv from the excel file.
copy & paste the excel file with the following headers to a new excel file.
* Name	
* Company	
* Industry	
* CO2_emissions_t	
* Source_CO2_emissions	
* Source	
* City	
* Province	
* Latitude	
* Longitude

If they dont have the above names, the matching of the code will not work correctly.
Save it as a CSV file.
The following step should be done especially if you have a german computer (where decimal points and comma are not according to the CSV-convention):
* replace the commas (,) to dots (.)
* replace the semicolons (;) to commas (,)

Save the file. 
! Make sure to delete the tailing empty rows. This just unnecessarily enlarges the csv file.

2. convert the csv to geojson
Go to this website: https://www.convertcsv.com/csv-to-geojson.htm and enter the csv code.
In step 3, enter the columns, in which longitude and latitude are saved. Normally this woul be the columns 9 and 10, respectively.
copy and paste the converted file (now geojson) to an empty file and replace the old one:
"convertcsv.geojson".
If you use anothre name, the code will not match.