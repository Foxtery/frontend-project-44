import readlineSync from 'readline-sync'
import setUserName from '../src/cli.js'

const brainGameMekchanizm = (rules, getData) => {
  const userName = setUserName()
  console.log(rules)
  let isWin = true
  for (let i = 1; i <= 3; i += 1) {
    const data = getData()
    const correctAnswer = data.correctAnswer
    console.log(data.question)
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
}

const getRandomFigure = (range = 100) => {
  const randomFigure = Math.floor(Math.random() * range) + 1
  return randomFigure
}

const getUsersAnswer = () => {
  const usersAnswer = readlineSync.question('Your answer: ')
  return usersAnswer
}

export { getRandomFigure, getUsersAnswer, brainGameMekchanizm }
