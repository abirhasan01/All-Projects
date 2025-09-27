// @ts-nocheck
//// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

// finding
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkBtn = form.querySelector("#check");
const resultText = cardBody.querySelector(".result-text");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const lostWonMgs = document.createElement("p");

//////////
form.addEventListener("submit", function () {
  event.preventDefault();
  attempts++;
  if (attempts === 5) {
    guessingNumber.disabled = true;
    checkBtn.disabled = true;
  }
  if (attempts < 6) {
    let guessNumber = Number(guessingNumber.value);
    checkResult(guessNumber);
    remainingAttempts.innerHTML = `Remaining attempts : ${
      totalAttempts - attempts
    }`;
  }
  guessingNumber.value = "";
});

function checkResult(guessingNumber) {
  const randomNum = getRandomNumber(5);
  if (guessingNumber === randomNum) {
    resultText.innerHTML = `You Have Won`;
    totalWons++;
  } else {
    resultText.innerHTML = `You have lost; Random number was: ${randomNum}`;
    totalLosts++;
  }
  lostWonMgs.innerHTML = `Won : ${totalWons}, Losts : ${totalLosts}`;
  lostWonMgs.classList.add("large-text");
  cardBody.appendChild(lostWonMgs);
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
