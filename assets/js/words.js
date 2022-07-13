// Change text on interval
// array to store strings
var words = [
    "research.",
    "UX.",
    "UI.",
    "design.",
    "personas.",
    "prototypes.",
    "Web Apps.",
    "cloud services"
];

var i = 1 // Start at 1 because 0 is already displayed

var animInterval = window.setInterval(() => {
    document.querySelector(".interval").textContent = words[i];
    i = ++i % words.length; // Add 1 until it reaches 5, then back to 0, 1, 2...
}, 1000);