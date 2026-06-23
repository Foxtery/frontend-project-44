#!/usr/bin/env node
import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')

let userName = readlineSync.question('May I have your name? ')
console.log(`Hello, ${userName}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
let i = 0
let isWin = true
while (i < 3) {
  let randomFigure = Math.floor(Math.random() * 100) + 1
  const correctAnswer = randomFigure % 2 === 0 ? 'yes' : 'no'
  console.log(`Question: ${randomFigure}`)
  const answer = readlineSync.question ('Your answer: ')
  if (answer === correctAnswer) {
    console.log('Correct!')
    i += 1
  }
  else {
    console.log(`${answer} is wrong answer ;( Correct answer was ${correctAnswer}.`)
    console.log(`Let's try again, ${userName}`)
    isWin = false
    i = 4
  }
}
isWin && console.log (`Congratulations, ${userName}!`)
