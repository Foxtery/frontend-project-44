import { getRandomFigure } from '../utils.js'

const getRandomOperation = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  const randomOperation = operators[randomIndex]
  return randomOperation
}

const rules = 'What is the result of the expression?'
const getData = () => {
  const firstNumber = getRandomFigure()
  const secondNumber = getRandomFigure()
  const operation = getRandomOperation()
  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`
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
  return { correctAnswer, question }
}

export { getRandomOperation, getData, rules }
