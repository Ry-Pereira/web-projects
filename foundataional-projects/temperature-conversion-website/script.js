// Name: Ryan Pereira
// Project Name: Temperature Converter Project
// Module Name: script.js
// Module Purpose: Handles temperature conversion calculations and webpage interactions
// Description: Allows users to enter a temperature, select a conversion type, and display the converted result
// Collaborators: None
// Sources: GitHub Copilot, Stack Overflow, ChatGPT, HTML Documentation
// Date: 6/6/2026
// Last Modified: 6/7/2026




// Assigns a function to run when the submit button is clicked
document.getElementById("submit_button").onclick = function(){
    // Checks if the Fahrenheit to Celsius radio button is selected
    if(document.getElementById("fahrenheit_to_celsius_radio_button").checked){
        // Retrieves the temperature entered by the user
        var fahrenheit_input = document.getElementById("temperature_input").value;
        // Converts the temperature to Celsius and displays the result
        document.getElementById("temperature_result").textContent =
            convert_fahrenheit_to_celsius(fahrenheit_input).toFixed(2) + " °C";
    }
    // Checks if the Celsius to Fahrenheit radio button is selected
    if(document.getElementById("celsius_to_fahrenheit_radio_button").checked){
        // Retrieves the temperature entered by the user
        var celsius_input = document.getElementById("temperature_input").value;
        // Converts the temperature to Fahrenheit and displays the result
        document.getElementById("temperature_result").textContent =
            convert_celsius_to_fahrenheit(celsius_input).toFixed(2) + " °F";
    }
}



// Converts a Fahrenheit temperature to Celsius
function convert_fahrenheit_to_celsius(fahrenheit_number){
    // Applies the Fahrenheit to Celsius conversion formula and returns the result
    return (5/9) * (fahrenheit_number - 32);

}




// Converts a Celsius temperature to Fahrenheit
function convert_celsius_to_fahrenheit(celsius_number){
    // Applies the Celsius to Fahrenheit conversion formula and returns the result
    return ((9/5) * celsius_number) + 32;

}