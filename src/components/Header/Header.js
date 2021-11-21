import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import ContactsHeader from '../ContactsHeader/ContactsHeader'
import ModVersion from '../Buttons/ModVersion/ModVersion'
import Nav from '../NavHeader/NavHeader'
import СollectivesButton from './СollectivesButton/СollectivesButton'
import SignInButton from './SignInButton/SignInButton'
import SearchButton from './SearchButton/SearchButton'
import RightMenuButton from '../Buttons/RightMenuButton/RightMenuButton'
// import useWindowSize from '../../helpers/windowsWidth';


const Header = ({
  onClickSignInButton,
  loggedIn,
  onClickSignOutButton,
  onClickOpenTopMenu,
  onClickOpenCollMenu }) => {
  // console.log(useWindowSize())
  const isIpadDevice = window.screen.availWidth <= 768

  return (
    <header className="header">
      <div className="header-container">
        <Logo place="header" />
        {isIpadDevice ? null : <ContactsHeader />}
        {isIpadDevice ? null : <ModVersion />}
        <Nav />
        <СollectivesButton
          onClick={onClickOpenCollMenu}
        />
        <SignInButton
          onClickSignInButton={onClickSignInButton}
          loggedIn={loggedIn}
          onClickSignOutButton={onClickSignOutButton}
        />
        {isIpadDevice ? null : <SearchButton />}
        <RightMenuButton
          onClickOpenTopMenu={onClickOpenTopMenu}
        />
      </div>
    </header>
  )
}

export default Header
