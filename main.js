// ===== MAIN PORTFOLIO FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded!');
  
  // Mobile Menu Toggle
  const mobileMenuToggle = () => {
      const nav = document.querySelector('nav');
      nav.classList.toggle('active');
  };
  
  // Initialize mobile menu button (add this HTML if missing)
  const menuButton = document.createElement('button');
  menuButton.className = 'mobile-menu-button';
  menuButton.innerHTML = '<i class="fas fa-bars"></i>';
  menuButton.addEventListener('click', mobileMenuToggle);
  document.querySelector('header').prepend(menuButton);

  // ===== ROCK PAPER SCISSORS GAME =====
  const initRPSGame = () => {
      if (!document.getElementById('rock')) return;
      
      let wins = 0, losses = 0, ties = 0;
      const resultDisplay = document.getElementById('result');
      
      const playRound = (playerChoice) => {
          const choices = ['rock', 'paper', 'scissors'];
          const computerChoice = choices[Math.floor(Math.random() * 3)];
          
          if (playerChoice === computerChoice) {
              ties++;
              resultDisplay.textContent = "It's a tie!";
          } else if (
              (playerChoice === 'rock' && computerChoice === 'scissors') ||
              (playerChoice === 'paper' && computerChoice === 'rock') ||
              (playerChoice === 'scissors' && computerChoice === 'paper')
          ) {
              wins++;
              resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
              if (wins === 5) triggerConfetti();
          } else {
              losses++;
              resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
          }
          
          updateScoreboard();
      };
      
      const updateScoreboard = () => {
          document.getElementById('wins').textContent = wins;
          document.getElementById('losses').textContent = losses;
          document.getElementById('ties').textContent = ties;
          
          // Add animation
          ['wins', 'losses', 'ties'].forEach(id => {
              const el = document.getElementById(id);
              el.classList.add('update');
              setTimeout(() => el.classList.remove('update'), 500);
          });
      };
      
      const triggerConfetti = () => {
          if (typeof confetti === 'function') {
              confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 }
              });
          }
      };
      
      // Event listeners
      document.getElementById('rock').addEventListener('click', () => playRound('rock'));
      document.getElementById('paper').addEventListener('click', () => playRound('paper'));
      document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
      document.getElementById('reset-btn').addEventListener('click', () => {
          wins = losses = ties = 0;
          resultDisplay.textContent = '';
          updateScoreboard();
      });
  };

  // ===== RSS READER FUNCTIONALITY =====
  const initRSSReader = () => {
      if (!document.getElementById('feed-selector')) return;
      
      const loadFeed = async (feedUrl) => {
          const container = document.getElementById('articles-container');
          const loadingEl = document.getElementById('loading');
          const errorEl = document.getElementById('error');
          
          container.innerHTML = '';
          loadingEl.style.display = 'block';
          errorEl.style.display = 'none';
          
          try {
              const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`);
              const data = await response.json();
              
              if (data.status === 'ok' && data.items?.length > 0) {
                  container.innerHTML = data.items.map(article => `
                      <div class="article-card">
                          <h3>${article.title}</h3>
                          <p class="article-description">${article.description || 'No summary available'}</p>
                          <div class="article-meta">
                              <span>${new Date(article.pubDate).toLocaleDateString()}</span>
                              <a href="${article.link}" target="_blank" class="read-more">
                                  Read more <i class="fas fa-external-link-alt"></i>
                              </a>
                          </div>
                      </div>
                  `).join('');
              } else {
                  throw new Error('No articles found');
              }
          } catch (error) {
              errorEl.textContent = 'Failed to load feed. Please try again later.';
              errorEl.style.display = 'block';
              console.error('RSS Error:', error);
          } finally {
              loadingEl.style.display = 'none';
          }
      };
      
      document.getElementById('feed-selector').addEventListener('change', (e) => loadFeed(e.target.value));
      loadFeed(document.getElementById('feed-selector').value);
  };

  // Initialize components
  initRPSGame();
  initRSSReader();

  // ===== UTILITY FUNCTIONS =====
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

// ===== GLOBAL FUNCTIONS =====
// Confetti fallback (add this script to <head>)
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>