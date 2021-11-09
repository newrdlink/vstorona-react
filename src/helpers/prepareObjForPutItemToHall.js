module.exports = (obj, strKey, strItem) => {
  const allKeysObj = Object.keys(obj)
  const objWithDataEditItem = allKeysObj.reduce((objReady, item) => {
    if (Array.isArray(obj[item])) {
      let find = obj[item].find((el) => el === strKey)
      if (find) {
        objReady[item] = strItem
      }
    }
    return objReady
  }, {})
  return objWithDataEditItem
}
