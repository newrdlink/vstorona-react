module.exports = (str) => {
  if (str === "Народные и образцовые") {
    return 'https://api.vs.didrom.ru/collectives/folk/1.jpg'
  }
  if (str === "Для взрослых") {
    return 'https://api.vs.didrom.ru/collectives/adult/2.jpg'
  }
  if (str === "Для детей") {
    return 'https://api.vs.didrom.ru/collectives/kids/3.jpg'
  }
  if (str === "Для молодёжи") {
    return 'https://api.vs.didrom.ru/collectives/young/4.jpg'
  }
}