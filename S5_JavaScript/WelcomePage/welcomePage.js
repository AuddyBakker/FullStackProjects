var hour = new Date().getHours();
var hour = 22;

if (hour <= 11 && hour >=5) {
  document.getElementById("greeting").innerHTML="Good Morning!";
  document.body.style.backgroundColor="#F5DE58";
  document.getElementById("myImage").src="sunrise.jpg"
} else if (hour >= 12 && hour <= 16) {
  document.getElementById("greeting").innerHTML="Good Day!";
  document.body.style.backgroundColor="#58C1F5";
  document.getElementById("myImage").src="midday.jpg"
} else if (hour >= 17 && hour <= 21) {
  document.getElementById("greeting").innerHTML="Good Evening!";
  document.body.style.backgroundColor="#F56025";
  document.getElementById("myImage").src="sunset.jpg"
} else {
  document.getElementById("greeting").innerHTML="Good Night!";
  document.body.style.backgroundColor="#4C3896";
}
