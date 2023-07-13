var heroin_count = [174, 257, 325, 417, 294, 474, 391, 387, 262, 166, 125]
var cocaine_count = [105, 147, 127, 177, 275, 347, 345, 463, 529, 656, 684]
var fentanyl_count = [13, 36, 75, 189, 482, 676, 760, 979, 1159, 1301, 1253]
var ethanol_count = [61, 83, 126, 176, 255, 290, 255, 342, 404, 477, 408]
var benzodiazepine_count = [49, 78, 157, 221, 242, 330, 267, 290, 307, 297, 261]

var years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

var Heroin = {
  name: "Heroin",
  x: years,
  y: heroin_count,
  type:'line'
  
};

var Cocaine = {
  name: "Cocaine",
  x: years,
  y: cocaine_count,
  type:'line' 
};

var Fentanyl = {
  name: "Fentanyl",
  x: years,
  y: fentanyl_count,
  type:'line'
};

var Ethanol = {
  name:"Ethanol",
  x: years,
  y: ethanol_count,
  type:'line'
};

var Benzodiazepine = {
  name: "Benzodiazepine",
  x: years,
  y: benzodiazepine_count,
  type:'line'
};

let data = [Heroin, Cocaine, Fentanyl, Ethanol, Benzodiazepine];

let layout = {
  title:'5 Most Deadly Drugs',
  legend_title: "Legend"
};

Plotly.newPlot('plot', data, layout);
