var correctName = "auddyUser";
var correctPassword = "abc123";


function returnInfo() {
  var nameVar = document.getElementById('nameForm').value;
  var namePass = document.getElementById('passForm').value;
  if (nameVar == correctName) {
    alert('Correct Name')
  } else {
    alert('Incorrect name')
  }


  if (namePass == correctPassword) {
    alert('Access Granted')
  } else {
    alert('Incorrect password')
  }
}

function calculate() {
  var one = document.getElementById('numOne').value;
  var two = document.getElementById('numTwo').value;
  var three = one * two;
  alert('Your result is: ' + three);
}
