#!/usr/bin/env node

import setUserName from '../src/cli.js'
import { getRandomFigure, getTheGreatestCommonDivisor, getUsersAnswer } from '../src/index.js'

const userName = setUserName()
console.log('Find the greatest common divisor of given numbers.')
let isWin = true
for (let i = 1; i <= 3; i += 1) {
  const firstNumber = getRandomFigure()
  const secondNumber = getRandomFigure()
  console.log(`Question: ${firstNumber} ${secondNumber}`)
  const correctAnswer = getTheGreatestCommonDivisor(firstNumber, secondNumber)
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
