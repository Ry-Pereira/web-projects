// Name: Ryan Pereira
// Project Name: Number Guessing Game
// Description: A program for guessing a randomly generated number and providing feedback on the user's guesses
// Module Name: script.js
// Module Purpose: Provides the JavaScript functionality for the number guessing game, including generating a random number, handling user input, and providing feedback on guesses.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, HTML documentation 
// Date: 6/3/2026
// Last Modified: 6/3/2026




// Setting a variable attempts to keep track of the number of guesses the user has made, and generating a random number between 1 and 100 for the user to guess.
var attempts = 0;
// Generating a random number between 1 and 100 for the user to guess.
var randomNumber = Math.floor(Math.random() * 100) + 1;




// Function to check the user's guess against the randomly generated number and provide feedback.
function checkGuess(userGuessNumber){
    //if the user's guess is less than the random number, display "Too low! Try again."
    if(userGuessNumber < randomNumber){
        // Displaying feedback to the user that their guess is too low and prompting them to try again.
        document.getElementById("guessFeedback").textContent = "Too low! Try again.";
    }
    // Else if the user's guess is greater than the random number, display "Too high! Try again."
    else if(userGuessNumber > randomNumber){
        // Displaying feedback to the user that their guess is too high and prompting them to try again.
        document.getElementById("guessFeedback").textContent = "Too high! Try again.";
    }
    // Else, the user's guess is correct, display a congratulatory message with the number of attempts and disable the submit button to prevent further guesses.
    else{
        // Displaying a congratulatory message to the user that they've guessed the number correctly, along with the number of attempts it took, and disabling the submit button to prevent further guesses.
        document.getElementById("guessFeedback").textContent = "Congratulations! You've guessed the number in " + attempts + " attempts!";
        // Disabling the submit button to prevent further guesses after the correct number has been guessed.
        document.getElementById("submitGuess").disabled = true;
    }

}


// Adding an event listener to the submit button that triggers the checkGuess function when clicked, passing the user's guess as an argument and incrementing the attempts counter.
document.getElementById("submitGuess").onclick = function(){
    // Retrieving the user's guess from the input field and converting it to a number, incrementing the attempts counter, updating the attempts display, and calling the checkGuess function with the user's guess.
    var userGuess = document.getElementById("guessInput").value;
    // Incrementing the attempts counter each time the user submits a guess.
    attempts++;
    // Updating the attempts display to show the current number of attempts the user has made.
    document.getElementById("attemptNumber").textContent = "Attempts: " + attempts;
    // Calling the checkGuess function with the user's guess to evaluate it against the randomly generated number and provide feedback.
    checkGuess(userGuess);
}


