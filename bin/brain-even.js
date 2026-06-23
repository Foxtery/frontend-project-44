#!/usr/bin/env node

import setUserName from '../src/cli.js'
import { getUsersAnswer } from '../src/index.js'

const userName = setUserName()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
let i = 0
let isWin = true
while (i < 3) {
  let randomFigure = Math.floor(Math.random() * 100) + 1
  const correctAnswer = randomFigure % 2 === 0 ? 'yes' : 'no'
  console.log(`Question: ${randomFigure}`)
  const answer = getUsersAnswer()
  if (answer === correctAnswer) {
    console.log('Correct!')
    i += 1
  }
  else {
    console.log(`${answer} is wrong answer ;( Correct answer was ${correctAnswer}.`)
    console.log(`Let's try again, ${userName}!`)
    isWin = false
    i = 4
  }
}
isWin && console.log (`Congratulations, ${userName}!`)
