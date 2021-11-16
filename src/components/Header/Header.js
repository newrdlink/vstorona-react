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
import useWindowSize from '../../helpers/windowsWidth';


const Header = ({
  onClickSignInButton,
  loggedIn,
  onClickSignOutButton,
  onClickOpenTopMenu,
  onClickOpenCollMenu }) => {
  // console.log(useWindowSize())
  return (
    <header className="header">
      <div className="header-container">
        <Logo place="header" />
        {useWindowSize() < 800 ? null : <ContactsHeader />}
        {useWindowSize() < 800 ? null : <ModVersion />}
        <Nav />
        <СollectivesButton
          onClick={onClickOpenCollMenu}
        />
        <SignInButton
          onClickSignInButton={onClickSignInButton}
          loggedIn={loggedIn}
          onClickSignOutButton={onClickSignOutButton}
        />
        {useWindowSize() < 800 ? null : <SearchButton />}
        <RightMenuButton
          onClickOpenTopMenu={onClickOpenTopMenu}
        />
      </div>
    </header>
  )
}

export default Header
