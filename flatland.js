document.addEventListener('DOMContentLoaded', () => {
    const square = document.getElementById('square');
    const words = document.getElementById('words');
    const buzzwords = [
        "Paradigm", "Synergy", "Leverage", "Pivot", "Bandwidth",
        "Event Propagation", "Bubbling", "DOM Manipulation"
    ];

    // Initial setup
    document.body.style.backgroundColor = "lightblue";
    words.textContent = "Welcome to Flatland - click the square!";
    square.style.backgroundColor = "gray";
    square.style.width = "200px";
    square.style.height = "200px";
    square.style.margin = "20px";
    square.style.cursor = "pointer";
    square.style.transition = "background-color 0.3s";

    // Change square color and update text
    function changeColor(color, message = null) {
        square.style.backgroundColor = color;
        if (message) words.textContent = message;
    }

    // Generate random buzzword
    function generateBuzzword() {
        const randomWord = buzzwords[Math.floor(Math.random() * buzzwords.length)];
        changeColor(`hsl(${Math.random() * 360}, 70%, 80%)`, `Buzzword: ${randomWord}`);
    }

    // Event Listeners
    square.addEventListener('click', () => {
        changeColor('red');
        generateBuzzword();
    });
    
    square.addEventListener('mouseover', () => changeColor('green'));
    square.addEventListener('mouseout', () => changeColor('gray'));
    
    // Bonus: Reset functionality
    document.getElementById('reset-btn')?.addEventListener('click', () => {
        changeColor('gray', "Welcome to Flatland - click the square!");
    });
});