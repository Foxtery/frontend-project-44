const getRandomFigure = (range = 100) => {
  const randomFigure = Math.floor(Math.random() * range) + 1
  return randomFigure
}

export { getRandomFigure }
