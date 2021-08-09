module.exports = (props) => {
  const { currentPath, infoPages } = props
  let a
  infoPages.forEach(item => currentPath.endsWith(item.pathName) ? a = item : null)
  return a
}
