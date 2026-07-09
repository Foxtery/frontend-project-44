import readlineSync from 'readline-sync'
import setUserName from '../src/cli.js'

const brainGameMekchanizm = (rules, getData) => {
  const userName = setUserName()
  console.log(rules)
  let isWin = true
  const roundCount = 3
  for (let i = 1; i <= roundCount; i += 1) {
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
      break
    }
  }
  isWin && console.log (`Congratulations, ${userName}!`)
}

export { brainGameMekchanizm }
