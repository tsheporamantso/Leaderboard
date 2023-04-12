class ScoreBoard {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/36Qpl9JjCfoxnxZtJDrn/scores/';
  }

  apiFetch = async () => {
    const request = new Request(this.url);
    const result = await fetch(request);
    const fResult = await result.json();
    const allScores = fResult.result.map(({ user: name, score }) => ({
      name,
      score,
    }));
    return allScores;
  }

  addNewScore= async (name, score) => {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({ user: name, score }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }

  displayScore = async () => {
    const scoreList = document.getElementById('scoreList');
    scoreList.innerHTML = '';
    const data = await this.apiFetch();

    if (this.url > 0) {
      scoreList.classList.add('show');
    }
    data.forEach((element) => {
      const content = `
        <li class="scoreItem">${element.name}</li>
        <li class="scoreItem">${element.score}</li>
      `;
      scoreList.innerHTML += content;
    });
  }
}
export default ScoreBoard;