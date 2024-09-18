let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const lblMessage = document.querySelector('.message');
const hiddenNumber = document.querySelector('.number');
const currentScore = document.querySelector('.score');
const highestScore = document.querySelector('.highscore');
const inpGuess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

const displayMessage = function (message) {
    lblMessage.textContent = message;
};

btnCheck.addEventListener('click', function () {
    const guess = Number(inpGuess.value);

    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        hiddenNumber.textContent = secretNumber;
        hiddenNumber.style.backgroundColor = '#60b347';
        document.body.style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            highestScore.textContent = highscore;
        }
    } else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            currentScore.textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            currentScore.textContent = 0;
        }
    }
});

btnAgain.addEventListener('click', function () {
    // Reset everything for a new game
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    currentScore.textContent = score;
    hiddenNumber.textContent = '?';
    hiddenNumber.style.backgroundColor = '#eee';
    document.body.style.backgroundColor = '#222';

    inpGuess.value = '';
});
