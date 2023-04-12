import ScoreBoard from './scoreboard.js';

const scoreBoard = new ScoreBoard();

const scoreForm = document.getElementById('scoreForm');

const formFunction = () => {
  scoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const scoreName = document.querySelector('.scoreName');
    const score = document.querySelector('.score');
    if (scoreName.value.length >= 1 && score.value !== '') {
      scoreBoard.addNewScore(scoreName.value, score.value);
    }
    scoreName.value = '';
    score.value = '';
  });
  scoreBoard.displayScore();
};

const refresh = document.querySelector('.refresh');
const refreshFunction = () => {
  refresh.addEventListener('click', () => {
    window.location.reload();
    scoreBoard.displayScore();
  });
};
export { formFunction, refreshFunction };