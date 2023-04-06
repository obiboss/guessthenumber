'use strict';
// First method by accessing the score and highscore data directly from the DOM i.e the html file
// creating variables for elements
/*
let secretNumber = document.querySelector('.number');
let displayMessage = document.querySelector('.message');
const guess = document.querySelector('.guess');
// for class with 2 seperated words you join them with a dot(.) or you use the more specific name like (.again )
const button01 = document.querySelector('.btn.check');
const button02 = document.querySelector('.again');
const button03 = document.querySelector('.play');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

let a1 = Math.trunc(Math.random() * 20 + 1);
secretNumber = a1;

button01.addEventListener('click', function () {
  const guezz = Number(guess.value);
  if (!guezz) {
    displayMessage.textContent = 'No number!! please input a number';
  } else if (guezz === a1) {
    displayMessage.textContent = 'correct';
    highscore.textContent = Number(highscore.textContent) + 5;
  } else {
    displayMessage.textContent =
      guezz < a1 ? 'wrong number 😭!! too low' : 'wrong number 😭!! too high';
    score.textContent = Number(score.textContent) - 1;
  }
});
// This code will reset the game to its original state. However there is need to add a button that will continue play
button02.addEventListener('click', function () {
  a1 = Math.trunc(Math.random() * 20 + 1);
  secretNumber = a1;
  displayMessage.textContent = 'Start guessing...';
  score.textContent = 20;
  highscore.textContent = 0;
  guess.value = '';
});
button03.addEventListener('click', function () {
  a1 = Math.trunc(Math.random() * 20 + 1);
  secretNumber = a1;
  displayMessage.textContent = 'Start guessing...';
  guess.value = '';
});
*/
/*
// second method by storing the data in our code and manipulating the actions from the code
let secretNumber = document.querySelector('.number');
let displayMessage = document.querySelector('.message');
const guess = document.querySelector('.guess');
// for class with 2 seperated words you join them with a dot(.) or you use the more specific name like (.again )
const button01 = document.querySelector('.btn.check');
const button02 = document.querySelector('.again');
const button03 = document.querySelector('.play');
let score = 20;
let highscore = 0;
let a1 = Math.trunc(Math.random() * 20 + 1);
secretNumber = a1;

button01.addEventListener('click', function () {
  let guezz = Number(guess.value);
  if (!guezz) {
    displayMessage.textContent = 'No number!! please input a number';
  } else if (guezz === a1) {
    displayMessage.textContent = 'correct';
    highscore += 5;
    document.querySelector('.highscore').textContent = highscore;
  } else {
    displayMessage.textContent =
      guezz < a1 ? 'wrong number 😭!! too low' : 'wrong number 😭!! too high';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
// This code will reset the game to its original state. However there is need to add a button that will continue play
button02.addEventListener('click', function () {
  a1 = Math.trunc(Math.random() * 20 + 1);
  secretNumber = a1;
  displayMessage.textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  highscore = 0;
  document.querySelector('.highscore').textContent = highscore;
  guess.value = '';
});
button03.addEventListener('click', function () {
  a1 = Math.trunc(Math.random() * 20 + 1);
  secretNumber = a1;
  displayMessage.textContent = 'Start guessing...';
  guess.value = '';
});
*/
// SECOND METHOD storing the data in the code
/*
let secretNumber = document.querySelector('.number');
let displayMessage = document.querySelector('.message');
const guess = document.querySelector('.guess');
// for class with 2 seperated words you join them with a dot(.) or you use the more specific name like (.again )
const button01 = document.querySelector('.btn.check');
const button02 = document.querySelector('.again');
const button03 = document.querySelector('.play');
let score = 20;
let highscore = 0;
let a1 = Math.trunc(Math.random() * 20 + 1);
secretNumber = a1;

button01.addEventListener('click', function () {
  let guezz = Number(guess.value);
  if (!guezz) {
    displayMessage.textContent = 'No number!! please input a number';
  } else if (guezz === a1) {
    displayMessage.textContent = 'correct';
    highscore += 5;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else {
    if (score > 1) {
      displayMessage.textContent =
        guezz < a1 ? 'wrong number 😭!! too low' : 'wrong number 😭!! too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage.textContent = 'GAME OVER ⛔';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});
// This code will reset the game to its original state. However there is need to add a button that will continue play
button02.addEventListener('click', function () {
  a1 = Math.trunc(Math.random() * 20 + 1);
  secretNumber = a1;
  displayMessage.textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  highscore = 0;
  document.querySelector('.highscore').textContent = highscore;
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
button03.addEventListener('click', function () {
  a1 = Math.trunc(Math.random() * 20 + 1);
  secretNumber = a1;
  displayMessage.textContent = 'Start guessing...';
  guess.value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
// completed
*/
// refactoring the code and placing some code as a function
let secretNumber = document.querySelector('.number');
let displayMessage = document.querySelector('.message');
const guess = document.querySelector('.guess');
// for class with 2 seperated words you join them with a dot(.) or you use the more specific name like (.again )
const button01 = document.querySelector('.btn.check');
const button02 = document.querySelector('.again');
const button03 = document.querySelector('.play');
let score = 20;
let highscore = 0;
const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const mysteryNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const topScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const scores = function (score) {
  document.querySelector('.score').textContent = score;
};
let randomNumber = Math.trunc(Math.random() * 20 + 1);

button01.addEventListener('click', function () {
  let guezz = Number(guess.value);
  if (!guezz) {
    showMessage('No number!! please input a number');
  } else if (guezz === randomNumber) {
    showMessage('correct');
    highscore += 5;
    bodyColor('#60b347');
    topScore(highscore);
    document.querySelector('.number').style.width = '30rem';
    mysteryNumber(randomNumber);
  } else {
    if (score > 1) {
      showMessage(
        guezz < randomNumber
          ? 'wrong number 😭!! too low'
          : 'wrong number 😭!! too high'
      );
      score--;
      scores(score);
    } else {
      showMessage('GAME OVER ⛔');
      scores(0);
      bodyColor('#FF0000');
    }
  }
});
// This code will reset the game to its original state. However there is need to add a button that will continue play
button02.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  showMessage('Start guessing...');
  score = 20;
  scores(score);
  highscore = 0;
  topScore(highscore);
  guess.value = '';
  bodyColor('#222');
  mysteryNumber('?');
});
button03.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  showMessage('Start guessing...');
  guess.value = '';
  document.querySelector('.number').style.width = '15rem';
  bodyColor('#222');
  mysteryNumber('?');
});
