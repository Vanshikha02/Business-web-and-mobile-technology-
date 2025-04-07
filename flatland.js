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