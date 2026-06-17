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
var date = new Date(0,0,0,0,0,0,0);
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var milliseconds = date.getMilliseconds();
var timeoutId;



function updateTime(){
    console.log(hours.toString().padStart(2,"0"),minutes.toString().padStart(2,"0"),seconds.toString().padStart(2,"0"),milliseconds.toString().padStart(2,"0"));
    if(milliseconds == 60){
        milliseconds=0;
        seconds+=1;
    }
    if(seconds  == 60){
        clearTimeout(timeoutId);
        seconds = 0;
        minutes +=1;
    }
    if(minutes  == 60){
        minutes = 0;
        hours +=1;
    }
    if(hours  == 60){
        clearTimeout(timeoutId);
        
    }
    else
    milliseconds +=1;

    timeoutId = setTimeout(updateTime, 10);
}



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




document.getElementById("start_button").onclick = function(){
    updateTime();
}



