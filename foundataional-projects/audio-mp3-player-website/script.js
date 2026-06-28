// Name: Ryan Pereira
// Project Name: Audio-MP3-Player
// Module Name: script.js
// Module Purpose: Controls the functionality of the MP3 player.
// Description: Manages song playback, playlist navigation, album artwork, song titles, and volume controls.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JavaScript documentation
// Date: 6/28/2026
// Last Modified: 6/28/2026


// ---------- Song Class ----------

// Represents a single song in the playlist
class Song{
    // Creates a new Song object
    constructor(songName, songAudio, songCover){
        this.songName = songName;
        this.songAudio = songAudio;
        this.songCover = songCover;
    }
}


// ---------- Song Playlist ----------

// Stores all songs available in the playlist
const audioFiles = [
    new Song(
        "Lofi Girl: Snowman",
        "audio/lofi-girl-snowman-song.mp3",
        "images/lofi-girl-snowman-song-cover.jpg"
    ),
    new Song(
        "Purple Cat: Midnight Snack",
        "audio/purple-cat-midnight-snack-song.mp3",
        "images/purple-cat-midnight-snack-song-cover.jpg"
    ),
    new Song(
        "Slipfunc: Walking Home",
        "audio/slipfunc-walking-home-song.mp3",
        "images/slipfunc-walking-home-song-cover.jpg"
    )
];


// ---------- DOM Elements ----------

// Audio-player element
const audioPlayer = document.getElementById("audio-player");

// Album-image container
const imageContainer = document.getElementById("image_container");

// Song-title heading
const songNameHeader = document.getElementById("song_name_container");


// ---------- Program Variables ----------

// Tracks the current song index
var audioFileCount = 0;

// Tracks whether the audio is paused
var isPaused = null;


// ---------- Initial Setup ----------

// Displays the first album cover when the page loads
imageContainer.style.backgroundImage = `url(${audioFiles[0].songCover})`;


// ---------- Play-or-Pause Button ----------

// Plays or pauses the selected song
document.getElementById("play_or_pause_button").onclick = function(){
    if(isPaused === null || isPaused === true){
        songNameHeader.textContent = audioFiles[audioFileCount].songName;
        audioPlayer.src = audioFiles[audioFileCount].songAudio;
        imageContainer.style.backgroundImage =
            `url(${audioFiles[audioFileCount].songCover})`;
        audioPlayer.play();
        isPaused = false;
    }
    else{
        audioPlayer.pause();
        isPaused = true;
    }
};


// ---------- Next-Song Button ----------

// Selects the next song in the playlist
document.getElementById("next_button").onclick = function(){
    audioPlayer.pause();
    if(audioFileCount === audioFiles.length - 1){
        audioFileCount = 0;
    }
    else{
        audioFileCount++;
    }
    songNameHeader.textContent = audioFiles[audioFileCount].songName;
    isPaused = true;
};


// ---------- Previous-Song Button ----------

// Selects the previous song in the playlist
document.getElementById("previous_button").onclick = function(){
    audioPlayer.pause();
    if(audioFileCount === 0){
        audioFileCount = audioFiles.length - 1;
    }
    else{
        audioFileCount--;
    }
    songNameHeader.textContent = audioFiles[audioFileCount].songName;
    isPaused = true;
};


// ---------- Volume-Up Button ----------

// Increases the audio volume
document.getElementById("plus_button").onclick = function(){
    audioPlayer.volume = Math.min(audioPlayer.volume + 0.10, 1);
};


// ---------- Volume-Down Button ----------

// Decreases the audio volume
document.getElementById("minus_button").onclick = function(){
    audioPlayer.volume = Math.max(audioPlayer.volume - 0.10, 0);
};