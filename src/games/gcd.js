import { getRandomFigure } from '../index.js'

const rules = 'Find the greatest common divisor of given numbers.'

const getData = () => {
  const firstNumber = getRandomFigure()
  const secondNumber = getRandomFigure()
  const question = `Question: ${firstNumber} ${secondNumber}`
  const correctAnswer = getTheGreatestCommonDivisor(firstNumber, secondNumber)
  return { correctAnswer, question }
}

const getTheGreatestCommonDivisor = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export { rules, getData }
