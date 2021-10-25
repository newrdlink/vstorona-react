module.exports = (str) => {
  if (str === "Декоративно-прикладное творчество") {
    return '/crafts'
  }
  if (str === "Танцевальные") {
    return '/dances'
  }
  if (str === "Вокальные") {
    return '/vocal'
  }
  if (str === "Театральные") {
    return '/theatrical'
  }
  if (str === "Изобразительное искусство") {
    return '/art'
  }
}