#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { playGame, names, getNumb } from '../../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
function playRound() {
  const number = getNumb(2, 100);
  const question = readlineSync.question(`Question: ${number} `);
  // eslint-disable-next-line consistent-return
  function isPrime(n) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return 'no';
    }
    if (n > 1) {
      return 'yes';
    }
  }
  if (question === isPrime(number)) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${question}' is wrong answer ;(. Correct answer was '${isPrime(number)}'.`,
  );
  console.log(`Let's try again, ${names}!`);
}
playGame(playRound, names);
