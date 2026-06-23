#!/usr/bin/env node

import setUserName from '../src/cli.js'
import { getRandomFigure, getUsersAnswer } from '../src/index.js'
import { isNumberPrime } from '../src/games/prime.js'

const userName = setUserName()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
let isWin = true
for (let i = 1; i <= 3; i += 1) {
  const number = getRandomFigure()
  console.log(`Question: ${number}`)
  const correctAnswer = isNumberPrime(number) ? 'yes' : 'no'
  const usersAnswer = getUsersAnswer()
  if (String(correctAnswer) === usersAnswer) {
    console.log('Correct!')
  }
  else {
    console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`)
    console.log(`Let's try again, ${userName}!`)
    isWin = false
    i = 4
  }
}

isWin && console.log (`Congratulations, ${userName}!`)
