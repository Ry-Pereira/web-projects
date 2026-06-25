// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified: 


class Song{
    constructor(songName,songAudio,songCover){
        this.songName = songName;
        this.songAudio = songAudio;
        this.songCover = songCover;
    }
}

const audioFiles = [new Song("Lofi Girl: Snowman","audio/lofi-girl-snowman-song.mp3","images/lofi-girl-snowman-song-cover.jpg")
    ,new Song("Purple Car: Midnight Snack","audio/purple-cat-midnight-snack-song.mp3","images/purple-cat-midnight-snack-song-cover.jpg")
    ,new Song("Slipfunc: Walking Home","audio/slipfunc-walking-home-song.mp3","images/slipfunc-walking-home-song-cover.jpg")];


const audioPlayer = document.getElementById("audio-player");

const imageContainer = document.getElementById("image_container");


imageContainer.style.backgroundImage = `url(${audioFiles[0].songCover})`

var audioFileCount = 0;
var isPaused = null;

var songNameHeader = document.getElementById("song_name_container");

document.getElementById("play_or_pause_button").onclick = function(){
    if (isPaused === null || isPaused === true) {
        songNameHeader.textContent = audioFiles[audioFileCount].songName;
        audioPlayer.src = audioFiles[audioFileCount].songAudio;
        imageContainer.style.backgroundImage = `url(${audioFiles[audioFileCount].songCover})`;
        audioPlayer.play()
        isPaused = false;
    }
    else {
        audioPlayer.pause();
        isPaused = true;
    }
}


document.getElementById("next_button").onclick = function(){
    audioPlayer.pause();
    if (audioFileCount === audioFiles.length - 1){
        audioFileCount = 0;
    }
    else{
        audioFileCount++;
    }
    songNameHeader.textContent = audioFiles[audioFileCount].songName;
    isPaused = true;
}


document.getElementById("previous_button").onclick = function(){
    audioPlayer.pause();
    if (audioFileCount === 0){
        audioFileCount = audioFiles.length - 1;
    }
    else{
        audioFileCount--;
    }
    songNameHeader.textContent = audioFiles[audioFileCount].songName;
    isPaused = true;
}




document.getElementById("plus_button").onclick = function() {
    audioPlayer.volume = Math.min(audioPlayer.volume + 0.10, 1);
};

document.getElementById("minus_button").onclick = function() {
    audioPlayer.volume = Math.max(audioPlayer.volume - 0.10, 0);
};