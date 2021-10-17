import React from 'react'
import './CloseButton.css'

const CloseButton = ({ onClick }) =>
  <button onClick={onClick} className="btn-close">
    <span className="btn-close__span"></span>
  </button>

export default CloseButton
