// Name: Ryan Pereira
// Project Name: Number Counter
// Description: This program controls the number counter by increasing, decreasing, and resetting the displayed value when the corresponding buttons are clicked
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 5/29/2026
// Last Modified: 5/29/2026



// Stores the current counter value and starts at 0
let CounterNumber = 0;

// Assigns a function to run when the Decrease button is clicked
document.getElementById("decrease_button").onclick = function(){
    // Subtracts 1 from the counter value
    CounterNumber--;
    // Updates the displayed counter value on the webpage
    document.getElementById("numberCounter").textContent = CounterNumber;
}



// Assigns a function to run when the Increase button is clicked
document.getElementById("increase_button").onclick = function(){
    // Adds 1 to the counter value
    CounterNumber++;
    // Updates the displayed counter value on the webpage
    document.getElementById("numberCounter").textContent = CounterNumber;
}



// Assigns a function to run when the Reset button is clicked
document.getElementById("reset_button").onclick = function(){
    // Resets the counter value back to 0
    CounterNumber = 0;
    // Updates the displayed counter value on the webpage
    document.getElementById("numberCounter").textContent = CounterNumber;
}