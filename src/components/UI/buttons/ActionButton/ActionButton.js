import React from 'react'
import './ActionButton.css'

const ActionButton = ({ type, onClick, name, action, place }) =>
  <button
    type={type}
    onClick={onClick}
    className={`action-button action-button_type_${action} action-button_place_${place}`}
  >


  </button>

export default ActionButton
