
const phrases = ["Discover Gold Veins", "Analyze Geological Data", "Optimize Your Finds"];
let current = 0;
const dynamicText = document.getElementById("dynamic-text");
setInterval(() => {
  current = (current + 1) % phrases.length;
  dynamicText.textContent = phrases[current];
}, 3000);
