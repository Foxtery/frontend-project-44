import { getRandomFigure } from '../index.js'

const rules = 'What number is missing in the progression?'

const getData = () => {
  const progressionArray = runProgression()
  const randomIndex = getRandomFigure(progressionArray.length - 1)
  const correctAnswer = progressionArray[randomIndex]
  const hidedProgression = hideSymbol(progressionArray, randomIndex)
  let getQuestion = `Question:`
  for (const value of hidedProgression) {
    getQuestion += ` ${value}`
  }
  const question = getQuestion
  return { question, correctAnswer }
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

export { rules, getData }
