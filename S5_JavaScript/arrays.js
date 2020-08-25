function showElement() {
  var myArray = ["England", "Spain", ["one", "two", "three"], "France", "Germany", 3,4,56];
  var arrValue = myArray.push(10);
  document.getElementById('show').innerHTML=myArray;
}
