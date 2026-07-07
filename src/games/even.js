const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

const getData = () => {
  let randomFigure = Math.floor(Math.random() * 100) + 1
  const correctAnswer = randomFigure % 2 === 0 ? 'yes' : 'no'
  const question = `Question: ${randomFigure}`
  return { correctAnswer, question }
}

export { rules, getData }
