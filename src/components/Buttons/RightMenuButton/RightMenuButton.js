import React from 'react'
import './RightMenuButton.css'

const RightMenuButton = ({ onClickOpenTopMenu, onClickMobile, place }) =>
  <button
    className={`right-menu-button ${place && "right-menu-button_place_mobile-version"}`}
    onClick={place ? onClickMobile : onClickOpenTopMenu}>
    <span className="right-menu-button__span"></span>
  </button>

export default RightMenuButton
