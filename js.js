
// script.js
// Example: Display a welcome message when a button is clicked.
const button = document.querySelector('#welcome-button');
const message = document.querySelector('#welcome-message');

button.addEventListener('click', () => {
    message.textContent = 'Hello, World!';
});