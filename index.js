// Creates random numbers, multiplies by 6 for a 6-sided dice, 
// uses Math.floor to round down and adds 1 for a range of 1-6.

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

//

switch (randomNumber1) {
  case 1:
    document.getElementsByTagName("img")[0].src = "images/dice1.png";
    break;
  case 2:
    document.getElementsByTagName("img")[0].src = "images/dice2.png";
    break;
  case 3:
    document.getElementsByTagName("img")[0].src = "images/dice3.png";
    break;
  case 4:
    document.getElementsByTagName("img")[0].src = "images/dice4.png";    
    break;
  case 5:
    document.getElementsByTagName("img")[0].src = "images/dice5.png";
    break;
  case 6:
    document.getElementsByTagName("img")[0].src = "images/dice6.png";
    break;
  default:
    break;
}

switch (randomNumber2) {
  case 1:
    document.getElementsByTagName("img")[1].src = "images/dice1.png";
    break;
  case 2:
    document.getElementsByTagName("img")[1].src = "images/dice2.png";
    break;
  case 3:
    document.getElementsByTagName("img")[1].src = "images/dice3.png";
    break;
  case 4:
    document.getElementsByTagName("img")[1].src = "images/dice4.png";    
    break;
  case 5:
    document.getElementsByTagName("img")[1].src = "images/dice5.png";
    break;
  case 6:
    document.getElementsByTagName("img")[1].src = "images/dice6.png";
    break;
  default:
    break;
}

// Change the title to declare either a winner or a draw

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}