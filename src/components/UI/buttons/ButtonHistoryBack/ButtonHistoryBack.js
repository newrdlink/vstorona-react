import React from 'react'
import './ButtonHistoryBack.css'

const ButtonHistoryBack = ({ name, onClick, place }) =>
  <button
    type="button"
    onClick={onClick}
    className={`button-history-back button-history-back_place_${place}`}
  >
    {name}
  </button>

export default ButtonHistoryBack
