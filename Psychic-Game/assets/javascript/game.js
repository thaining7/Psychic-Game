
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var userguessesleft = 9;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userguessessofarText = document.getElementById("userguessessofar-text");
var userguessesleftText = document.getElementById("userguessesleft-text");
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeypress = function(event) {
    var userGuess = event.key;
    if (userGuess === computerGuess) {
        wins++;
        rSetVars("win");
    } else { userguessesleft--;
}
if (userguessesleft === 0) {
    losses++;
    rSetVars("loss");
}

userguessessofarText.textContent += userGuess+", ";
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses " + losses;
userguessesleftText.textContent = "User Guesses Left " + userguessesleft

}

function rSetVars(a) {
    userguessesleft = 9;
    userguessessofarText.textContent = "User Guesses So Far: ";
    if (a=="win") {
        console.log("a win has occured");
    }
    else {
        console.log("a loss has occured");
    }
    
}
