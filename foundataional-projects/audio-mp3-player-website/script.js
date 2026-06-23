// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified: 




const audioFiles = ["audio/bsd.u-pook.mp3","audio/lofi-girl-snowman.mp3","audio/purple-cat-midnight-snack.mp3","audio/slipfunc-walking-home.mp3"];
var audioFileCount = 0;
var isPaused = null;

document.getElementById("play_or_pause_button").onclick = function() {
    if (isPaused === null || isPaused === true) {
        document.getElementById("bsd_u_pook").play();
        isPaused = false;
    }
    else {
        document.getElementById("bsd_u_pook").pause();
        isPaused = true;
    }
}