import React from 'react'
import './LinkSignInSignUp.css'

const LinkSignInSignUp = ({ onClickBtnSignIn, onClickBtnSignUp, place, nameBtn, nameSpan }) => {
  return (
    <p className="button-sign">
      {nameSpan}
      <button
        type="button"
        className="button-sign__button"
        onClick={onClickBtnSignIn || onClickBtnSignUp}>
        {nameBtn}
      </button>
    </p>
  )
}

export default LinkSignInSignUp
