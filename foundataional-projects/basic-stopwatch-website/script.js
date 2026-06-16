// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified: 


var darkMode = false;



document.getElementById("dark_mode_toggle_button").onclick = function(){
    if(darkMode == false){
        document.body.style.color = "blue";
        document.getElementById("start_button").style.color = "blue";
        document.getElementById("lap_button").style.color = "blue";
        document.getElementById("restart_button").style.color = "blue";
        document.getElementById("dark_mode_toggle_button").style.color = "blue";
        document.body.style.backgroundImage = "url('images/darktime-forest.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";

        darkMode = true;
    }
    else{
        document.body.style.color = "yellow";
        document.getElementById("start_button").style.color = "yellow";
        document.getElementById("lap_button").style.color = "yellow";
        document.getElementById("restart_button").style.color = "yellow";
        document.getElementById("dark_mode_toggle_button").style.color = "yellow";
        document.body.style.backgroundImage = "url('images/daytime-forest.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
      
        darkMode = false;

    }

}