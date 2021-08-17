import React from 'react'
import './CloseIcon.css'

const CloseIcon = ({ onClick }) =>
  <svg className="close-icon"
    onClick={() => onClick()}>
    <path className="close-icon__btn"
      d="M44.7661 41.5683L31.9759 28.778L44.7661 
    15.9878L41.5686 12.7902L28.7783 25.5805L15.9881 
    12.7902L12.7905 15.9878L25.5808 28.778L12.7905 
    41.5683L15.9881 44.7658L28.7783 31.9756L41.5686 
    44.7658L44.7661 41.5683Z"
      fill="white"
    />
  </svg>

export default CloseIcon
