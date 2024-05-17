const currentScore = {
    player1: document.querySelector('.score .player1'),
    player2: document.querySelector('.score .player2'),
}

const changeScore = {
    player1: document.querySelector('.scoringSection .player1'),
    player2: document.querySelector('.scoringSection .player2'),
    reset: document.querySelector('.scoringSection .reset')
}

const limitScore = document.querySelector('.maxScore')

let _maxScore = parseInt(limitScore.value)

let _player1Score = parseInt(currentScore.player1.textContent);
let _player2Score = parseInt(currentScore.player2.textContent);

limitScore.addEventListener('change', () => {
    _maxScore = parseInt(limitScore.value)
    console.log(_maxScore)
})

changeScore.player1.addEventListener('click', () => {
    if (_player1Score < _maxScore) {
        _player1Score++
        currentScore.player1.textContent = _player1Score

        _player1Score == _maxScore && disableButtons();
    }
})
changeScore.player2.addEventListener('click', () => {
    if (_player2Score < _maxScore) {
        _player2Score++
        currentScore.player2.textContent = _player2Score

        _player2Score == _maxScore && disableButtons();
    }
})

changeScore.reset.addEventListener('click', defaults)

function disableButtons() {
    changeScore.player1.disabled = true;
    changeScore.player2.disabled = true;
}

function defaults() {
    _player1Score = 0
    currentScore.player1.textContent = 0
    _player2Score = 0
    currentScore.player2.textContent = 0
    changeScore.player1.disabled = !true;
    changeScore.player2.disabled = !true;
}