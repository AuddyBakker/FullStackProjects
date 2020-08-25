var carObject = {color:"Red", maxSpeed: "200 Km/h", seats:2, wheels:4};
var myObject = {name: "Auddy", eyeColor:"Hazel", skill: "Data Science"};
var countryPopulations = {england:3000, france:2000, indonesia:3500};

carObject.engineSize = "2L";

function run() {
  var value = carObject.engineSize;
  document.getElementById('output').innerHTML=value;
}
