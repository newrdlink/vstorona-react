import React from 'react'
import './ActionButton.css'

const ActionButton = ({ type, onClick, name, action }) =>
  <button
    type={type}
    onClick={onClick}
    className={`action-button action-button_type_${action}`}
  >


  </button>

export default ActionButton
