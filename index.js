function getRandom(){
  var random = Math.floor(Math.random()*6) + 1;
  // var srcString = "images/dice" + random + ".png";
  return random;
}
var firstNum = getRandom();
var secondNum = getRandom();
var srcText1 = "images/dice" + firstNum + ".png"
var srcText2 = "images/dice" + secondNum + ".png"
document.querySelector(".img1").setAttribute("src", srcText1);
document.querySelector(".img2").setAttribute("src", srcText2);
if(firstNum < secondNum){
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
else if(firstNum > secondNum){
  document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
}
else{
  document.querySelector("h1").innerText = "Draw";
}
