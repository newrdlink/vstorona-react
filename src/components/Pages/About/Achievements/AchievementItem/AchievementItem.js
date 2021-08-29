import React from 'react'
import './AchievementItem.css'
import ButtonsBox from '../../../../UI/ButtonsBox/ButtonsBox'

const AchivementItem = ({
  title,
  link,
  id,
  loggedIn,
  onClickAdd,
  onClickEdit,
  onClickRemove
}) => {

  return (
    <li className="achievement-item">
      <a className="achievement-item__link" href={link}>{title}</a>
      {loggedIn ?
        <ButtonsBox
          id={id}
          // onClickRmBtn={onClickRmBtn}
          place="achievement"
          loggedIn={loggedIn}
          onClickAdd={() => onClickAdd(id)}
          onClickEdit={() => onClickEdit(id)}
          onClickRemove={() => onClickRemove(id)}
        /> : null
      }
    </li>
  )
}

export default AchivementItem
