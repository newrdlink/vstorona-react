import React from 'react'
import './DocItem.css'

import ButtonsBox from '../../../../UI/ButtonsBox/ButtonsBox'

const DocItem = ({
  name,
  link,
  id,
  loggedIn,
  onClickAdd,
  onClickEdit,
  onClickRemove
}) => {
  // console.log(id,)
  return (
    <li className="doc-item">
      <a href={link}
        className="doc-item__link"
        target="_blank"
        rel="noreferrer">
        {name}
      </a>
      {loggedIn ?
        <ButtonsBox
          id={id}
          // onClickRmBtn={onClickRmBtn}
          place="document"
          loggedIn={loggedIn}
          onClickAdd={() => onClickAdd(id)}
          onClickEdit={() => onClickEdit(id)}
          onClickRemove={() => onClickRemove(id)}
        /> : null
      }
    </li>
  )
}

export default DocItem
