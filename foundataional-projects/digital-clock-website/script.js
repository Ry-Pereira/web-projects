// Name: Ryan Pereira
// Project Name: Digital Clock
// Module Name: script.js
// Module Purpose: Updates and displays the current date and time on the webpage every second.
// Description: Retrieves the current system date and time, formats it into a 12-hour clock with AM/PM notation, updates the page elements, and continuously refreshes the display.
// Collaborators: None
// Sources: Github Copilot, Stack Overflow, ChatGPT, JS documentation
// Date: 6/14/2026
// Last Modified: 6/15/2026




// Updates the clock and date display on the webpage
function updateClock() {
    // Creates a new Date object containing the current date and time
    let date = new Date();
    // Retrieves the current hour in 24-hour format
    let date_Hours = date.getHours();
    // Determines whether the current time is AM or PM
    let isAmOrPm = date_Hours >= 12 ? "PM" : "AM";
    // Converts the hour from 24-hour format to 12-hour format
    let formattedHours = date_Hours % 12;
    // Converts hour 0 to 12 for midnight
    formattedHours = formattedHours ? formattedHours : 12;
    // Retrieves and formats the current minutes with a leading zero if needed
    let minutes = String(date.getMinutes()).padStart(2, "0");
    // Retrieves and formats the current seconds with a leading zero if needed
    let seconds = String(date.getSeconds()).padStart(2, "0");
    // Formats the hour with a leading zero if needed
    formattedHours = String(formattedHours).padStart(2, "0");
    // Updates the time display element with the formatted time
    document.getElementById("time_display").textContent = `${formattedHours}:${minutes}:${seconds} ${isAmOrPm}`;
    // Updates the date display element with the current date
    document.getElementById("date_display").textContent = date.toDateString();
    // Calls the updateClock function again after 1 second
    setTimeout(updateClock, 1000);
}


// Starts the clock when the page loads
updateClock();