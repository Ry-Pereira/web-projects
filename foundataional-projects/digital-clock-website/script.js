// Name: 
// Project Name: 
// Module Name: 
// Module Purpose: 
// Description: 
// Collaborators: 
// Sources: 
// Date: 
// Last Modified:







function updateClock() {
    let date = new Date();

    let date_Hours = date.getHours();
    let isAmOrPm = date_Hours >= 12 ? "PM" : "AM";

    let formattedHours = date_Hours % 12;
    formattedHours = formattedHours ? formattedHours : 12;

    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    formattedHours = String(formattedHours).padStart(2, "0");

    document.getElementById("time_display").textContent =
        `${formattedHours}:${minutes}:${seconds} ${isAmOrPm}`;

    document.getElementById("date").textContent = date.toDateString();

    setTimeout(updateClock, 1000);
}

updateClock();