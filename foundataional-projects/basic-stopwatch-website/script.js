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



function updateTime(){
    let currentTime = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${milliseconds.toString().padStart(2,"0")}`;
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


document.getElementById("pause_button").onclick = function(){
    clearTimeout(timeoutId);
}

document.getElementById("restart_button").onclick = function(){
    clearTimeout(timeoutId);
    document.getElementById("laps_container").innerHTML =` `;
    hourse = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    let currentTime = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${milliseconds.toString().padStart(2,"0")}`;
    document.getElementById("time_display").textContent = currentTime;
}


document.getElementById("lap_button").onclick = function(){
    let lapTime = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${milliseconds.toString().padStart(2,"0")}`;
    document.getElementById("laps_container").innerHTML += `<p>Lap: ${lapTime}</p>`;
}