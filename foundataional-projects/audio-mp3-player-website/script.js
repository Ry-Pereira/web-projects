// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified: 




const audioFiles = ["bsd-u-pook","lofi-girl-snowman","purple-cat-midnight-snack","slipfunc-walking-home"];
var audioFileCount = 0;
var isPaused = null;

var songNameHeader = document.getElementById("song_name_container");

document.getElementById("play_or_pause_button").onclick = function(){
    if (isPaused === null || isPaused === true) {
        songNameHeader.textContent = audioFiles[audioFileCount];
        document.getElementById(audioFiles[audioFileCount] + "-audio").play();
        isPaused = false;
    }
    else {
        document.getElementById(audioFiles[audioFileCount] + "-audio").pause();
        isPaused = true;
    }
}


document.getElementById("next_button").onclick = function(){
    document.getElementById(audioFiles[audioFileCount]+ "-audio").pause();
    if (audioFileCount === audioFiles.length - 1){
        audioFileCount = 0;
    }
    else{
        audioFileCount++;
    }
    songNameHeader.textContent = audioFiles[audioFileCount];
    isPaused = true;
}


document.getElementById("previous_button").onclick = function(){
    document.getElementById(audioFiles[audioFileCount]+ "-audio").pause();
    if (audioFileCount === 0){
        audioFileCount = audioFiles.length - 1;
    }
    else{
        audioFileCount--;
    }
    songNameHeader.textContent = audioFiles[audioFileCount];
    isPaused = true;
}