import React from 'react'
import './ButtonsBox.css'

import ActionButton from '../buttons/ActionButton/ActionButton'

const ButtonsBox = ({ id, onClickAdd, onClickEdit, onClickRemove }) => {

  


  return (
    <div className="buttons-box">
      <ActionButton
        type="button"
        action="edit"
        onClick={onClickEdit}
      />
      <ActionButton
        type="button"
        action="remove"
        onClick={onClickRemove}
      />
      <ActionButton
        type="button"
        action="add"
        onClick={onClickAdd}
      />
    </div>
  )
}

export default ButtonsBox
