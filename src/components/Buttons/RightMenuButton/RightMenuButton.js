import React from 'react'
import './RightMenuButton.css'

const RightMenuButton = ({ onClickOpenTopMenu }) =>
  <button className="right-menu-button" onClick={onClickOpenTopMenu}>
    {/* <svg width="27" height="16" fill="none">
      <path d="M26.73 0H0.27C0.1215 0 0 0.0818182 0 
    0.181818V1.63636C0 1.73636 0.1215 1.81818 0.27 
    1.81818H26.73C26.8785 1.81818 27 1.73636 27 
    1.63636V0.181818C27 0.0818182 26.8785 0 26.73 
    0ZM26.73 14.1818H0.27C0.1215 14.1818 0 14.2636 
    0 14.3636V15.8182C0 15.9182 0.1215 16 0.27 
    16H26.73C26.8785 16 27 15.9182 27 15.8182V14.3636C27 
    14.2636 26.8785 14.1818 26.73 14.1818ZM26.73 
    7.09091H0.27C0.1215 7.09091 0 7.17273 0 7.27273V8.72727C0 
    8.82727 0.1215 8.90909 0.27 8.90909H26.73C26.8785 8.90909 
    27 8.82727 27 8.72727V7.27273C27 7.17273 26.8785 7.09091 
    26.73 7.09091Z" fill="white" />
    </svg> */}
    <span className="right-menu-button__span"></span>
  </button>

export default RightMenuButton
