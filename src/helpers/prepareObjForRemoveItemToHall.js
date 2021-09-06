module.exports = (obj, strItem) => {

  const allKeysObj = Object.keys(obj)

  const objWithDataEditItem = allKeysObj.reduce((objReady, item) => {

    if (Array.isArray(obj[item])) {
      let find = obj[item].find((el) => el === strItem)

      if (find) {
        objReady[item] = strItem
        // objReady['key'] = item
      }
    }
    return objReady
  }, {})

  return objWithDataEditItem
}
