// Flatland Interactive Demo
document.addEventListener('DOMContentLoaded', () => {
    const square = document.getElementById('square');
    const words = document.getElementById('words');
    const buzzwords = [
        "Event Propagation", "Bubbling", "Capture Phase", 
        "Event Delegation", "DOM Manipulation", "Callback Functions"
    ];

    // Change square color
    function changeColor(color) {
        square.style.background = color;
        words.textContent = `Changed to ${color}`;
    }

    // Generate random buzzword
    function generateBuzzword() {
        const randomWord = buzzwords[Math.floor(Math.random() * buzzwords.length)];
        words.textContent = randomWord;
        square.style.background = `hsl(${Math.random() * 360}, 70%, 80%)`;
    }

    // Event Listeners
    square.addEventListener('click', () => changeColor('#4CAF50'));
    square.addEventListener('mouseover', () => changeColor('#FFC107'));
    square.addEventListener('mouseout', () => changeColor('#ddd'));
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        square.style.background = '#ddd';
        words.textContent = 'Click the square to begin...';
    });

    document.getElementById('buzzword-btn').addEventListener('click', generateBuzzword);
});
const buzzwords = ["Paradigm", "Synergy", "Leverage", "Pivot", "Bandwidth"];

window.onload = function() {
    const square = document.getElementById('square');
    const words = document.getElementById('words');
    
    // Set initial styles
    document.body.style.backgroundColor = "lightblue";
    words.textContent = "Welcome to Flatland - click the square!";
    square.style.backgroundColor = "gray";
    square.style.width = "200px";
    square.style.height = "200px";
    square.style.margin = "20px";
    
    // Event listeners
    square.addEventListener('click', () => {
        square.style.backgroundColor = 'red';
        updateBuzzword();
    });
    
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'green';
    });
    
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = 'gray';
    });
    
    function updateBuzzword() {
        const randomWord = buzzwords[Math.floor(Math.random() * buzzwords.length)];
        words.textContent = `Buzzword: ${randomWord}`;
    }
};