// Select the buttons and the info paragraph
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const info = document.getElementById('info');

// Event listener for Button 1
button1.addEventListener('click', () => {
  info.textContent = "You clicked Button 1! Here's some info about it.";
});

// Event listener for Button 2
button2.addEventListener('click', () => {
  info.textContent = "You clicked Button 2! Here's some info about it.";
});

// Event listener for Button 3
button3.addEventListener('click', () => {
  info.textContent = "You clicked Button 3! Here's some info about it.";
});