class ScoreBoard {
  constructor() {
    this.scores = [];
  }

  addNewScore() {
    const name = document.querySelector('.scoreName');
    const score = document.querySelector('.score');
    this.scores.push(`${name.value} : ${score.value}`);
  }

  displayScore() {
    const scoreList = document.getElementById('scoreList');
    if (this.scores.length > 0) {
      scoreList.classList.add('show');
    }
    const li = document.createElement('li');
    this.scores.forEach((element) => {
      li.textContent = element;
      scoreList.appendChild(li);
    });
  }
}
export default ScoreBoard;