import readlineSync from 'readline-sync'

const getRandomFigure = (range = 100) => {
  const randomFigure = Math.floor(Math.random() * range) + 1
  return randomFigure
}
const getRandomOperation = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  const randomOperation = operators[randomIndex]
  return randomOperation
}

const getTheGreatestCommonDivisor = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const getUsersAnswer = () => {
  const usersAnswer = readlineSync.question('Your answer: ')
  return usersAnswer
}

const runProgression = () => {
  const progressionArray = []
  const startPosition = getRandomFigure()
  const indexProgression = getRandomFigure()
  const progressionLength = getRandomFigure(5) + 5
  let currentElement
  progressionArray.push(startPosition)
  for (let i = 1; i <= progressionLength; i += 1) {
    currentElement = startPosition + indexProgression * i
    progressionArray.push(currentElement)
  }
  return progressionArray
}

const hideSymbol = (array, randomIndex) => {
  array[randomIndex] = '..'
  return array
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

export { getRandomFigure, getRandomOperation, getTheGreatestCommonDivisor, getUsersAnswer, runProgression, hideSymbol, isNumberPrime }
