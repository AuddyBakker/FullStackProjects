var userCount = 0;
var count = "count: ";
var colorArr = ["pink", "red", "orange", "yellow", "green", "blue", "purple"]

function addOne(inputVar) {
  userCount += 1;
  document.getElementById('number').innerHTML=count + userCount;
  document.body.style.backgroundColor=colorArr[userCount % 7];
}

function subtractOne(inputVar) {
  userCount -= 1;
  document.getElementById('number').innerHTML=count + userCount;
  document.body.style.backgroundColor=colorArr[userCount*-1 % 7];
}
