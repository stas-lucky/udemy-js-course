"use strict";

const messageElm = document.querySelector(".message");
const numberElm = document.querySelector(".number");
const scoreElm = document.querySelector(".score");
const guessElm = document.querySelector(".guess");
const highscoreElm = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessElm.value);
  console.log(guess, typeof guess);

  if (!guess) {
    showMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    // When player wins
    showMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    numberElm.style.width = "30rem";
    numberElm.textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      highscoreElm.textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
    } else {
      showMessage("You lost the game!");
    }
  }
  scoreElm.textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  showMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  numberElm.style.width = "15rem";
  numberElm.textContent = "?";
  guessElm.value = "";
  scoreElm.textContent = score;
});

const showMessage = function (msg) {
  messageElm.textContent = msg;
};

const startNewGame = function () {};
