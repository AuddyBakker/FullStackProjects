

window.onload = appear();


var start;
var clicked;
var randomColor = '#' + ((1<<24)*Math.random()|0).toString(16);

function disappear() {
  document.getElementById("box").style.display = 'none';
  clicked = Date.now();
  var reactionTime = (clicked - start) / 1000;
  alert(reactionTime + ' seconds!');
  var randomDelay = Math.random()*3000;
  setTimeout(appear,  randomDelay);
}

function appear() {
  var randomTop = Math.random()*400+10;
  var randomLeft = Math.random()*300+10;
  var randomHeight = Math.random()*200+10;
  var randomWidth = Math.random()*200+10;
  var randomCurve = Math.random();
  if (randomCurve < 0.5) {
    document.getElementById("box").style.borderRadius = 25 + 'px';
  } else {
    document.getElementById("box").style.borderRadius = 0 + 'px';
  }
  document.getElementById("box").style.top = randomTop + 'px';
  document.getElementById("box").style.left = randomLeft + 'px';
  document.getElementById("box").style.height = randomHeight + 'px';
  document.getElementById("box").style.width = randomWidth + 'px';
  randomColor = '#' + ((1<<24)*Math.random()|0).toString(16);
  document.getElementById("box").style.backgroundColor = randomColor;

  document.getElementById("box").style.display = 'block';
  start = Date.now();
}
