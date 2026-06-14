// Name: Ryan Pereira
// Project Name: RGB Background Color Project
// Module Name: script.js
// Module Purpose: Handles user interactions, retrieves RGB input values, changes the canvas background color, and plays audio effects.
// Description: Contains functions and event handlers that apply user-selected RGB values to the color display canvas and play a paintbrush sound when the submit button is clicked.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 6/13/2026
// Last Modified: 6/14/2026


// Changes the canvas background color using the RGB values provided.
function changeBackgroundColor(redValue, greenValue, blueValue) {
    // Updates the background color of the canvas using an RGB color string.
    document.getElementById("background_canvas").style.backgroundColor =
        `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}


// Executes when the user clicks the Submit button.
document.getElementById("submit").onclick = function() {
    // Plays the paintbrush sound effect.
    document.getElementById("paintbrush_audio").play();
    // Retrieves the red RGB value entered by the user.
    userRedValue = document.getElementById("rgb_red_value_input").value;
    // Retrieves the green RGB value entered by the user.
    userGreenValue = document.getElementById("rgb_green_value_input").value;
    // Retrieves the blue RGB value entered by the user.
    userBlueValue = document.getElementById("rgb_blue_value_input").value;
    // Applies the selected RGB color to the canvas.
    changeBackgroundColor(userRedValue, userGreenValue, userBlueValue);
}