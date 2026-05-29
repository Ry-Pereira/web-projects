
let CounterNumber = 0




   

document.getElementById("decrease_button").onclick = function(){
    CounterNumber--;
    document.getElementById("numberCounter").textContent = CounterNumber;
}

document.getElementById("increase_button").onclick = function(){
    CounterNumber++;
    document.getElementById("numberCounter").textContent = CounterNumber;
}

document.getElementById("reset_button").onclick = function(){
    CounterNumber = 0;
    document.getElementById("numberCounter").textContent = CounterNumber;
}
