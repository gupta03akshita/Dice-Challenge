// GENERATE RANDOM NUMBER FOR PLAYER 1 (DICE 1)
var randOne = (Math.floor(Math.random() * 6)) + 1;

// SET THE IMAGE PATH FOR PLAYER 1 BASED ON RANDOM NUMBER
var path1 = "Dice\\dice" + randOne + ".png";
document.querySelector(".img1").setAttribute("src", path1);

// GENERATE RANDOM NUMBER FOR PLAYER 2 (DICE 2)
var randTwo = (Math.floor(Math.random() * 6)) + 1;

// SET THE IMAGE PATH FOR PLAYER 2 BASED ON RANDOM NUMBER
var path2 = "Dice\\dice" + randTwo + ".png";
document.querySelector(".img2").setAttribute("src", path2);

// DETERMINE WINNER BASED ON RANDOM NUMBERS
if (randOne > randTwo) {
    // PLAYER 1 WINS
    document.querySelector("h1").textContent = "Player 1 Won!"
}
else if (randOne < randTwo) {
    // PLAYER 2 WINS
    document.querySelector("h1").textContent = "Player 2 Won!"
}
else {
    // IT'S A DRAW
    document.querySelector("h1").textContent = "It's a draw!";
}