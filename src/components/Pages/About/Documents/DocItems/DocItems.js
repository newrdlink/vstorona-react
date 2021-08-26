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
  // console.log(docsArr)
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
