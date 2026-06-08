// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified: 




let diceRandomValue;
let diceArrayValues = [];





function playDiceRollSound(){
    document.getElementById("dice_rolling_sound").play();

}


function getDiceRollValue(){
    return Math.floor(Math.random() * 7) + 1;
}




document.getElementById("roll_dice_button").onclick = function(){
    playDiceRollSound();
    diceRandomValue = getDiceRollValue();
}