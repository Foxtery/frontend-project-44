#!/usr/bin/env node

import readlineSync from 'readline-sync'
import setUserName from '../src/cli.js'
import { getRandomFigure } from '../src/index.js'
import { getRandomOperation } from '../src/games/calc.js'

const userName = setUserName()
console.log('What is the result of the expression?')
let isWin = true
for (let i = 1; i <= 3; i += 1) {
  const firstNumber = getRandomFigure()
  const secondNumber = getRandomFigure()
  const operation = getRandomOperation()
  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`
  console.log(question)
  let correctAnswer
  if (operation === '+') {
    correctAnswer = firstNumber + secondNumber
  }
  else if (operation === '-') {
    correctAnswer = firstNumber - secondNumber
  }
  else {
    correctAnswer = firstNumber * secondNumber
  }
  const usersAnswer = readlineSync.question('Your answer: ')
  if (String(correctAnswer) === usersAnswer) {
    console.log('Correct!')
  }
  else {
    console.log(`${usersAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`)
    console.log(`Let's try again, ${userName}!`)
    isWin = false
    i = 4
  }
}
isWin && console.log (`Congratulations, ${userName}!`)
