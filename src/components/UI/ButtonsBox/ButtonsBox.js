import React from 'react'
import './ButtonsBox.css'

import ActionButton from '../buttons/ActionButton/ActionButton'

const ButtonsBox = ({
  id,
  onClickAdd,
  onClickEdit,
  onClickRemove,
  place
}) => {

  return (
    <div className={`buttons-box button-box_place_${place}`}>
      <ActionButton
        type="button"
        action="edit"
        onClick={onClickEdit}
        place={place}
      />
      <ActionButton
        type="button"
        action="remove"
        onClick={onClickRemove}
        place={place}
      />
      <ActionButton
        type="button"
        action="add"
        onClick={onClickAdd}
        place={place}
      />
    </div>
  )
}

export default ButtonsBox
