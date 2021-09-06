module.exports = (obj, strKey, strItem) => {
  const allKeysObj = Object.keys(obj)
  const objWithDataEditItem = allKeysObj.reduce((objReady, item) => {
    if (Array.isArray(obj[item])) {
      let find = obj[item].find((el) => el === strKey)
      if (find) {
        objReady[item] = strItem
        // objReady['key'] = item
      }
    }
    return objReady
  }, {})
  return objWithDataEditItem
}


    // const keysHall = Object.keys(currentHall)
    // const currentEditItemInArray = keysHall.reduce((obj, item) => {
    //   if (Array.isArray(currentHall[item])) {
    //     let find = currentHall[item].find((el) => el === itemStr)
    //     if (find) {
    //       obj['item'] = itemStr
    //       obj['key'] = item
    //     }
    //   }
    //   return obj
    // }, {})
    // return console.log(currentEditItemInArray)