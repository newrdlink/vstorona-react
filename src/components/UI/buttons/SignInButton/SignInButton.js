import React from 'react'
import './SignInButton.css'
import SignOut from '../SignOut/SignOut'

import { CurrentUserContext } from '../../../../contexts/CurrentUserContext'

const SignInButton = ({ onClickSignInButton, loggedIn, onClickSignOutButton }) => {

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <>
      <button
        className="signin-button"
        onClick={loggedIn ? onClickSignOutButton : onClickSignInButton}
      >
        {loggedIn ? currentUser.firstName + ' ' + currentUser.lastName : 'войти'}
        {loggedIn ? <SignOut /> : null}
      </button>

    </>
  )
}


export default SignInButton
