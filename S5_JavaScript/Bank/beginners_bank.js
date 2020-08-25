var correctName = "auddyUser";
var correctPassword = "abc123";
var balance = 1000;

function returnInfo() {
  var nameVar = document.getElementById('nameForm').value;
  var namePass = document.getElementById('passForm').value;
  var withdrawAmt = document.getElementById('amountForm').value;
  if (nameVar == correctName) {
    alert('Correct Name');
  } else {
    alert('Incorrect name');
  }


  if (namePass == correctPassword) {
    alert('Access Granted');
  } else {
    alert('Incorrect password');
  }

  if (nameVar == correctName && namePass == correctPassword) {
    balance -= withdrawAmt;
  }

  document.getElementById('withdrawMessage').innerHTML = "You have successfully made a withdrawal Auddy. Your new balance is: " + balance;
}

function calculate() {
  var one = document.getElementById('numOne').value;
  var two = document.getElementById('numTwo').value;
  var three = one * two;
  alert('Your result is: ' + three);
}
