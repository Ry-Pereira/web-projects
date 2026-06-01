// Name: Ryan Pereira
// Project Name: Random Number Generator
// Module Name: script.js
// Module Purpose: Functionality for the Random Number Generator
// Description: Generates random numbers between 1 and 100
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 5/31/2026
// Last Modified: 5/31/2026










// Event listener for the button click to generate a random number
document.getElementById("generateNumberBtn").onclick = function() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    // Display the generated random number in the designated area
    document.getElementById("numberDisplay").textContent = "Number: " + randomNumber;
}


