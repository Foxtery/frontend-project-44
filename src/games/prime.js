import { getRandomFigure } from '../index.js'

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getData = () => {
  const number = getRandomFigure()
  const question = `Question: ${number}`
  const correctAnswer = isNumberPrime(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

const isNumberPrime = (number) => {
  if (number < 2) {
    return false
  }

  if (number === 2) {
    return true
  }

  if (number % 2 === 0) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

export { rules, getData }
