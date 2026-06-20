// Name: Ryan Pereira
// Project Name: StopWatch 
// Module Name: script.js
// Module Purpose: Controls the stopwatch operations, lap recording, time display updates, and dark/bright mode features.
// Description: Creating a stopwatch website. The user can be able to start the stopwatch, incrementing the time. They can be able to pause the stopwatch for it to stop incremeenting in time. They can be able to lap the stopwatch, or record the time hit, and be able to view it. They can can restart the timer backt to starting time. They can also switch modes for dark and bright mode.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, CSS documentation.
// Date: 6/15/2026 
// Last Modified: 6/19/2026 


// Tracks whether dark mode is currently enabled
var darkMode = false;

// Stores the stopwatch time values
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

// Stores the timeout ID used for stopping the stopwatch
var timeoutId;

// Tracks the current lap number
var lapNumber = 0;

// Stores the current state of the stopwatch
var isPaused = false;
var isRestarted = false;
var isStarted = false;


// Updates the stopwatch time display and increments time
function updateTime(){

    // Formats the current stopwatch time with leading zeros
    let currentTime =
        `${hours.toString().padStart(2,"0")} :
        ${minutes.toString().padStart(2,"0")} :
        ${seconds.toString().padStart(2,"0")} :
        ${milliseconds.toString().padStart(2,"0")}`;

    // Displays the formatted time on the page
    document.getElementById("time_display").textContent = currentTime;

    // Converts milliseconds into seconds
    if(milliseconds == 60){
        milliseconds = 0;
        seconds += 1;
    }

    // Converts seconds into minutes
    if(seconds == 60){
        seconds = 0;
        minutes += 1;
    }

    // Converts minutes into hours
    if(minutes == 60){
        minutes = 0;
        hours += 1;
    }

    // Increments milliseconds
    milliseconds += 1;

    // Calls updateTime again after 10 milliseconds
    timeoutId = setTimeout(updateTime, 10);
}


// Handles dark mode and bright mode switching
document.getElementById("dark_mode_toggle_button").onclick = function(){
