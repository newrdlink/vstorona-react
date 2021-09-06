import React from 'react'
import './HallDescriptionItem.css'

import ButtonsBox from '../../../../UI/ButtonsBox/ButtonsBox'

const HallDescriptionItem = ({ item, loggedIn, onClickAdd, onClickRemove }) => {
  // console.log(item)

  // const onClickAdd = (item) => console.log(item)
  const onClickEdit = (item) => console.log(item)
  // const onClickRemove = (item) => console.log(item)

  return (
    <li className="hall-description-item">
      {item}
      {loggedIn ?
        <ButtonsBox
          id={item}
          place="hall"
          loggedIn={loggedIn}
          onClickAdd={() => onClickAdd(item)}
          onClickEdit={() => onClickEdit(item)}
          onClickRemove={() => onClickRemove(item)}
        /> : null
      }
    </li>
  )
}

export default HallDescriptionItem
