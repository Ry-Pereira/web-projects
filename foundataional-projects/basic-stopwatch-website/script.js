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
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var timeoutId;
var lapNumber = 0;


var isPaused = false;
var isRestarted = false;
var isStarted = false;



function updateTime(){
    let currentTime = `${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")} : ${milliseconds.toString().padStart(2,"0")}`;
    document.getElementById("time_display").textContent = currentTime;
    if(milliseconds == 60){
        milliseconds=0;
        seconds+=1;
    }
    if(seconds  == 60){
        seconds = 0;
        minutes +=1;
    }
    if(minutes  == 60){
        minutes = 0;
        hours +=1;
    }
    milliseconds +=1;
    timeoutId = setTimeout(updateTime, 10);
}





document.getElementById("dark_mode_toggle_button").onclick = function(){
    if(darkMode == false){
        document.body.style.color = "blue";
        document.getElementById("time_display").style.color = "blue";
        document.getElementById("start_button").style.color = "blue";
        document.getElementById("pause_button").style.color = "blue";
        document.getElementById("lap_button").style.color = "blue";
        document.getElementById("restart_button").style.color = "blue";
        document.getElementById("dark_mode_toggle_button").style.color = "blue";
        document.getElementById("dark_mode_toggle_button").textContent = "BRIGHTEN";
        document.body.style.backgroundImage = "url('images/dark-woods.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        darkMode = true;
        document.getElementById("laps_container").style.color = "blue";
    }
    else{
        document.body.style.color = "yellow";
        document.getElementById("time_display").style.color = "yellow";
        document.getElementById("start_button").style.color = "yellow";
        document.getElementById("pause_button").style.color = "yellow";
        document.getElementById("lap_button").style.color = "yellow";
        document.getElementById("restart_button").style.color = "yellow";
        document.getElementById("dark_mode_toggle_button").style.color = "yellow";
        document.getElementById("dark_mode_toggle_button").textContent = "DARKEN";
        document.body.style.backgroundImage = "url('images/daytime-forest.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        darkMode = false;
        document.getElementById("laps_container").style.color = "yellow";

    }

}




document.getElementById("start_button").onclick = function(){
    isStarted = true;
    isPaused = false;
    isRestarted = false;
    updateTime();
}


document.getElementById("pause_button").onclick = function(){
    isPaused = true;
    clearTimeout(timeoutId);
}

document.getElementById("restart_button").onclick = function(){
    clearTimeout(timeoutId);
    isRestarted = true;
    isPaused = false;
    lapNumber = 0;
    document.getElementById("laps_container").innerHTML =` `;
    hourse = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    let currentTime = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${milliseconds.toString().padStart(2,"0")}`;
    document.getElementById("time_display").textContent = currentTime;
}


document.getElementById("lap_button").onclick = function(){
    if(isPaused === true || isRestarted === true || isStarted === false){
        window.alert("You Cannot While Timer is paused, restarted, or haven't even started.")
    }
    else{
        lapNumber++;
        let lapTime = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${milliseconds.toString().padStart(2,"0")}`;
        document.getElementById("laps_container").innerHTML += `<p>LAP ${lapNumber}: ${lapTime}</p>`;
    }
}