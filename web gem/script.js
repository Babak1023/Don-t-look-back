const startBtn = document.getElementById('start-btn');
const instructions = document.getElementById('instructions');
const scoreBoard = document.getElementById('scoreboard');
const scoreText = document.getElementById('score');
const jumpScareDiv = document.getElementById('jump-scare');
const screamAudio = document.getElementById('scream-audio');

let score = 0;
let gameActive = false;

startBtn.addEventListener('click', startGame);

function startGame() {
  gameActive = true;
  startBtn.style.display = 'none';
  instructions.textContent = 'Tap anywhere to collect points!';
  scoreBoard.style.display = 'block';

  // Increment score on tap
  document.body.addEventListener('click', incrementScore);

  // Trigger jump scare randomly between 5-10 seconds
  const scareTime = Math.random() * 5000 + 5000;
  setTimeout(triggerJumpScare, scareTime);
}

function incrementScore() {
  if (gameActive) {
    score++;
    scoreText.textContent = score;
  }
}

function triggerJumpScare() {
    gameActive = false;
    document.body.removeEventListener('click', incrementScore);
  
    // Aktifkan overlay flash
    const flashOverlay = document.getElementById('flash-overlay');
    flashOverlay.style.display = 'block';
  
    // Tampilkan gambar jump scare
    jumpScareDiv.style.display = 'flex';
    const scaryImage = jumpScareDiv.querySelector('img');
    scaryImage.style.animation = 'zoomIn 1s forwards, fadeIn 1s forwards';
  
    // Mainkan suara scream
    screamAudio.play();
  
    // Nonaktifkan flash dan reset game setelah 3 detik
    setTimeout(() => {
      flashOverlay.style.display = 'none';
      location.reload();
    }, 3000);
  }
  
