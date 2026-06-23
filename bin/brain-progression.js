#!/usr/bin/env node

import setUserName from '../src/cli.js'
import { getRandomFigure, getUsersAnswer } from '../src/index.js'
import { runProgression, hideSymbol } from '../src/games/prime.js'

const userName = setUserName()
console.log('What number is missing in the progression?')
let isWin = true
for (let i = 1; i <= 3; i += 1) {
  const progressionArray = runProgression()
  const randomIndex = getRandomFigure(progressionArray.length - 1)
  const correctAnswer = progressionArray[randomIndex]
  const hidedProgression = hideSymbol(progressionArray, randomIndex)
  let getQuestion = `Question:`
  for (const value of hidedProgression) {
    getQuestion += ` ${value}`
  }
  console.log(getQuestion)
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
