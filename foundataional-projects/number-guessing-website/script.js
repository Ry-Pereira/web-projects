// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified: 



var attempts = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1;



function checkGuess(userGuessNumber){
    if(userGuessNumber < randomNumber){
        document.getElementById("guessFeedback").textContent = "Too low! Try again.";
    }
    else if(userGuessNumber > randomNumber){
        document.getElementById("guessFeedback").textContent = "Too high! Try again.";
    }
    else{
        document.getElementById("guessFeedback").textContent = "Congratulations! You've guessed the number in " + attempts + " attempts!";
        document.getElementById("submitGuess").disabled = true;
    }

}

document.getElementById("submitGuess").onclick = function(){
    var userGuess = document.getElementById("guessInput").value;
    attempts++;
    document.querySelector("p").textContent = "Attempts: " + attempts;
    checkGuess(userGuess);
}


