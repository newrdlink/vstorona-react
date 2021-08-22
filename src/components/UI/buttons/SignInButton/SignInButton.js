import React from 'react'
import './SignInButton.css'

const SignInButton = ({ onClickSignInButton }) =>
  <button
    className="signin-button"
    onClick={onClickSignInButton}
  >
    войти
  </button>

export default SignInButton
