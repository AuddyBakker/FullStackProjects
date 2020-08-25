function calcTip() {
  var bill = document.getElementById("billAmt").value;
  var numPeople = document.getElementById("partySize").value;
  var service = document.getElementById("qualtiyService").value;
  var billForEach = 0;
  billForEach = bill * service / numPeople;
  billForEach =  billForEach.toFixed(2);
  document.getElementById("tipAmt").innerHTML = 'Tip amount: <br>' + '$ ' + billForEach + '<br>Per person';
}
