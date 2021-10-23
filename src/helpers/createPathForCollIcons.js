module.exports = (str) => {
  if (str === "Народные и образцовые") {
    return '/folk'
  }
  if (str === "Для детей") {
    return '/kids'
  }
  if (str === "Для взрослых") {
    return '/adult'
  }
  if (str === "Для молодёжи") {
    return '/young'
  }
}