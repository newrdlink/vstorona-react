module.exports = (props) => {
  const { currentPath, infoPages } = props
  let a
  infoPages.forEach(item => currentPath.endsWith(item.pathName) ? a = item : null)
  return a
}
// module.exports = (props) => {
//   const { currentPath, titlesPages } = props
//   console.log(currentPath)
//   console.log(titlesPages)
//   let a
//   titlesPages.forEach((item) => {
//     if (currentPath.endsWith(item.pathName)) {
//       a = item
//       return a
//     }
//   })
//   return a
// }
