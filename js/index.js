function rollDice(){
  var die1 = document.getElementById("die1");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1;
  die1.innerHTML = d1;
  status.innerHTML = "You rolled "+diceTotal+".";
  if(d1 == "6"){
    status.innerHTML += " roll again!";
  }
}

var players = [];
var whoseTurn = 0;
players[0] = "Green's Turn";
players[1] = "Red's Turn";
players[2] = "Yellow's Turn";
players[3] = "Blue's Turn";

var playerOne = [];
var playerTwo = [];
var playerThree = [];
var playerFour = [];
var gameOver = false;

document.getElementsByClassName('playerTurn')[0].innerHTML = players[whoseTurn];

var firstGreenCounter = document.getElementById("green-1");
firstCounter.remove();
document.getElementById("21").appendChild(firstGreenCounter);


// $("#table").on("click", "td", function() {
//   if (gameOver == false) {
//     if (whoseTurn == 0) {
//       if (diceTotal != "6") {
//         $( this ).addId("green-1")
//         $( this ).html('green-1');
//         whoseTurn = 1;
//         document.getElementsByClassName('playerTurn')[0].innerHTML = players[whoseTurn]; // changes the h2 into the player turn
//         playerOne.push(parseInt(this.dataset.num)) ; // push the square clicked in the var array for player one and converts it to a integer
//       }
//
//       if(checkWinner(playerOne)){
//         setTimeout(alert, 200, "Player 1 Won");
//         gameOver = true;
//       }
//
//     }
//   });
