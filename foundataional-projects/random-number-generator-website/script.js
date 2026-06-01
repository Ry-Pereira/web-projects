// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified: 











document.getElementById("generateNumberBtn").onclick = function() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numberDisplay").textContent = "Number: " + randomNumber;
}


