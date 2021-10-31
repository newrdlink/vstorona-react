module.exports = (str) => {
  if (str === "folk") {
    return 'Народные и образцовые'
  }
  if (str === "adult") {
    return 'Для взрослых'
  }
  if (str === "kids") {
    return 'Для детей'
  }
  if (str === "young") {
    return 'Для молодёжи'
  }
}