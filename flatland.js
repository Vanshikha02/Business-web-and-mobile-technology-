document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const square = document.getElementById('square');
    const words = document.getElementById('words');
    const resetBtn = document.getElementById('reset-btn');
    
    // Validate elements exist
    if (!square || !words) {
        console.error('Critical elements missing!');
        return;
    }

    // Configuration
    const buzzwords = [
        "Paradigm", "Synergy", "Leverage", "Pivot", "Bandwidth",
        "Event Propagation", "Bubbling", "DOM Manipulation", "Callback",
        "API", "Framework", "Middleware", "Promise", "Async/Await"
    ];
    
    const colors = {
        default: 'gray',
        hover: 'green',
        click: 'red',
        reset: 'gray'
    };

    // Initialize application
    function init() {
        // Set initial styles
        document.body.style.backgroundColor = "lightblue";
        square.style.cssText = `
            width: 200px;
            height: 200px;
            margin: 20px auto;
            background-color: ${colors.default};
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            border-radius: 4px;
        `;
        
        words.textContent = "Welcome to Flatland - click the square!";
        words.style.cssText = `
            font-size: 1.2rem;
            margin: 20px 0;
            min-height: 24px;
            transition: all 0.3s ease;
        `;
        
        // Add reset button if it exists
        if (resetBtn) {
            resetBtn.style.cssText = `
                padding: 8px 16px;
                background: #4CAF50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin: 10px;
                transition: all 0.3s ease;
            `;
        }
    }

    // Change square color and optional message
    function changeColor(color, message = null) {
        square.style.backgroundColor = color;
        if (message) {
            words.textContent = message;
            words.style.color = color === 'red' ? 'darkred' : 'inherit';
        }
    }

    // Generate random buzzword with colorful effect
    function generateBuzzword() {
        const randomWord = buzzwords[Math.floor(Math.random() * buzzwords.length)];
        const hue = Math.floor(Math.random() * 360);
        changeColor(`hsl(${hue}, 70%, 50%)`, `Buzzword: ${randomWord}`);
        
        // Add temporary animation
        square.style.transform = 'scale(1.05)';
        setTimeout(() => {
            square.style.transform = 'scale(1)';
        }, 200);
    }

    // Event Listeners with enhanced interactions
    function setupEventListeners() {
        // Square interactions
        square.addEventListener('click', () => {
            changeColor(colors.click);
            generateBuzzword();
        });
        
        square.addEventListener('mouseover', () => {
            changeColor(colors.hover);
            square.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
        });
        
        square.addEventListener('mouseout', () => {
            changeColor(colors.default);
            square.style.boxShadow = 'none';
        });
        
        // Reset functionality
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                changeColor(colors.reset, "Welcome to Flatland - click the square!");
                words.style.color = 'inherit';
            });
            
            resetBtn.addEventListener('mouseover', () => {
                resetBtn.style.transform = 'translateY(-2px)';
                resetBtn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });
            
            resetBtn.addEventListener('mouseout', () => {
                resetBtn.style.transform = 'none';
                resetBtn.style.boxShadow = 'none';
            });
        }
    }

    // Start the application
    init();
    setupEventListeners();
    
    // Debug confirmation
    console.log('Flatland interactive demo initialized successfully');
});
/* Flatland Interactive Script */
document.addEventListener('DOMContentLoaded', function() {
    let square = document.getElementById('square');
    let words = document.getElementById('words');

    // Initial greeting
    greeting();

    // Event listeners
    square.addEventListener('click', clicked);
    square.addEventListener('mouseover', function() { changeColour('gray'); });
    square.addEventListener('mouseout', function() { changeColour('red'); });

    function changeColour(colour) {
        square.style.background = colour;
    }

    function greeting() {
        words.innerHTML = "Welcome to Flatland.<br> I am Square.";
    }

    function clicked() {
        let msg = "Build a<br>" + createBuzzwordPhrase();
        words.innerHTML = msg;
        changeColour('green');
    }

    function createBuzzwordPhrase() {
        let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
        let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
        let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

        let idx_buz = Math.floor(Math.random() * buzz.length);
        let idx_act = Math.floor(Math.random() * action.length);
        let idx_out = Math.floor(Math.random() * outcome.length);

        return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
    }
});