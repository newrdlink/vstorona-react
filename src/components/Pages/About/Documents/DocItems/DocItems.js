import React from 'react'
import './DocItems.css'

import DocItem from '../DocItem/DocItem'

const DocItems = ({
  docsArr,
  loggedIn,
  onClickAdd,
  onClickEdit,
  onClickRemove
}) => {

  docsArr.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1
    }
    return 1
  })
  // console.log(sortedArr)
  return (
    <ul className="doc-items">
      {docsArr.map((item) => {
        const { _id, title, link } = item
        // console.log(_id)
        return <DocItem
          key={_id}
          name={title}
          link={link}
          loggedIn={loggedIn}
          onClickAdd={onClickAdd}
          onClickEdit={onClickEdit}
          onClickRemove={onClickRemove}
          id={_id}
        />
      })}
    </ul>
  )
}

export default DocItems
