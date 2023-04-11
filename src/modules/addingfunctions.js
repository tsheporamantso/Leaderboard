import ScoreBoard from './scoreboard.js';

const scoreBoard = new ScoreBoard();

const scoreForm = document.getElementById('scoreForm');
scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  scoreBoard.addNewScore();
  scoreBoard.displayScore();
});
