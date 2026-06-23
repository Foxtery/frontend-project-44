import { getRandomFigure } from '../index.js'

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

export { runProgression, hideSymbol }
