'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let scores;
let currentScore;
let activePlayer;
let playing;
// starting consitions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');

  //   return scores to 0
  score0El.textContent = 0;
  score1El.textContent = 0;

  // return current to 0
  current0El.textContent = 0;
  current1El.textContent = 0;
  // remove the player winner classList
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  // revert the active player to player 1
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3.check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //   add dice to current score and update currentEl score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // player looses scores and update currentEl back to 0
      // switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // if clicked, add current score to active player's total score(scoreEl)
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if player score>100..if true..finish game.

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // switch player if not...switch to next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);

// // the odin project practice
// let answer = Number(prompt('Enter your number here'));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }
