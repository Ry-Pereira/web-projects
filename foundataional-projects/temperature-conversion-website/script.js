// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified: 




document.getElementById("submit_button").onclick = function(){
    
    if(document.getElementById("fahrenheit_to_celsius_radio_button").checked){
        var fahrenheit_input = document.getElementById("temperature_input").value;
        document.getElementById("temperature_result").textContent = convert_fahrenheit_to_celsius(fahrenheit_input).toFixed(2) + " °C";




    }

    if(document.getElementById("celsius_to_fahrenheit_radio_button").checked){
        var celsius_input = document.getElementById("temperature_input").value;
        document.getElementById("temperature_result").textContent = convert_celsius_to_fahrenheit(celsius_input).toFixed(2) + " °F";




    }

}


function convert_fahrenheit_to_celsius(fahrenheit_number){
    return (5/9) * (fahrenheit_number - 32);
}


function convert_celsius_to_fahrenheit(celsius_number){
    return ((9/5) * celsius_number) + 32;
}