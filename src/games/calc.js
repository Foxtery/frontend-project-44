const getRandomOperation = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  const randomOperation = operators[randomIndex]
  return randomOperation
}
export { getRandomOperation }
