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
var diceArrayValues = [];






function playDiceRollSound(){
    document.getElementById("dice_rolling_sound").play();

}


function getDiceRollValue(){
    return Math.floor(Math.random() * 6) + 1;
}


function displayDiceImage(diceValue){
    if(diceValue === 1){
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-one.png" width="100px">';

    }
    else if(diceValue === 2){
       document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-two.png" width="100px">';

    }
    else if(diceValue === 3){
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-three.png" width="100px">';

    }
    else if(diceValue === 4){
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-four.png" width="100px">';

    }
    else if(diceValue === 5){
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-five.png" width="100px">';

    }
    else if(diceValue === 6){
        document.getElementById("dice_images_container").innerHTML += '<img src="images/dice-six-faces-six.png" width="100px">';

    }
        

}

document.getElementById("roll_dice_button").onclick = function(){
    diceArrayValues = [];
    diceImageContainer = document.getElementById("dice_images_container").innerHTML = ""
    

    playDiceRollSound();
    
    let diceQuantity = document.getElementById("dice_quantity").value;
    for(let i = 0; i < diceQuantity; i++){
        let rolledDiceValue = getDiceRollValue();
        displayDiceImage(rolledDiceValue);
        diceArrayValues.push(rolledDiceValue);
    }

    document.getElementById("dice_value_display").textContent = "Dice: " + diceArrayValues.join(", ");

    for(let i = 0; i < diceQuantity; i++){

    }
    
    
}