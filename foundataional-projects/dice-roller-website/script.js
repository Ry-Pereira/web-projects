// Name: Ryan Pereira
// Project Name: Dice Roller Project
// Module Name: script.js
// Module Purpose: Controls the dice rolling functionality and updates the webpage with results
// Description: Generates random dice values, plays a rolling sound effect, displays dice images, and shows the rolled values
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JS documentation
// Date: 6/8/2026
// Last Modified: 6/9/2026



// Stores a random dice value
let diceRandomValue;
// Stores all rolled dice values in an array
var diceArrayValues = [];







// Plays the dice rolling sound effect
function playDiceRollSound(){
    // Finds the audio element and plays the sound
    document.getElementById("dice_rolling_sound").play();
}




// Returns a random number from 1 to 6
function getDiceRollValue(){
    // Generates and returns a random dice value
    return Math.floor(Math.random() * 6) + 1;
}



// Displays the correct dice image based on the rolled value
function displayDiceImage(diceValue){
    // Checks if the dice value is 1
    if(diceValue === 1){
        // Adds the image for dice face 1
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-one.png" width="100px" style="margin: auto;">';
    }
    // Checks if the dice value is 2
    else if(diceValue === 2){
        // Adds the image for dice face 2
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-two.png" width="100px" style="margin: auto;">';
    }
    // Checks if the dice value is 3
    else if(diceValue === 3){
        // Adds the image for dice face 3
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-three.png" width="100px" style="margin: auto;">';
    }
    // Checks if the dice value is 4
    else if(diceValue === 4){
        // Adds the image for dice face 4
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-four.png" width="100px" style="margin: auto;">';
    }
    // Checks if the dice value is 5
    else if(diceValue === 5){
        // Adds the image for dice face 5
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-five.png" width="100px" style="margin: auto;">';
    }
    // Checks if the dice value is 6
    else if(diceValue === 6){
        // Adds the image for dice face 6
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-six.png" width="100px" style="margin: auto;">';
    }
}



// Assigns a function to run when the Roll Dice button is clicked
document.getElementById("roll_dice_button").onclick = function(){
    // Clears the array of previous dice values
    diceArrayValues = [];
    // Removes any previously displayed dice images
    diceImageContainer = document.getElementById("dice_images_container").innerHTML = "";
    // Plays the dice rolling sound effect
    playDiceRollSound();
    // Gets the number of dice entered by the user
    let diceQuantity = document.getElementById("dice_quantity").value;
    // Loops through the number of dice requested
    for(let i = 0; i < diceQuantity; i++){
        // Generates a random dice value
        let rolledDiceValue = getDiceRollValue();
        // Displays the corresponding dice image
        displayDiceImage(rolledDiceValue);
        // Stores the rolled value in the array
        diceArrayValues.push(rolledDiceValue);
    }
    // Displays all rolled dice values as text
    document.getElementById("dice_value_display").textContent = "Dice: " + diceArrayValues.join(", ");
    // Empty loop currently reserved for future functionality
    for(let i = 0; i < diceQuantity; i++){
    }
}