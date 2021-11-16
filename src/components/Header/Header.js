import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import ContactsHeader from '../ContactsHeader/ContactsHeader'
import ModVersion from '../Buttons/ModVersion/ModVersion'
import Nav from '../NavHeader/NavHeader'
import СollectivesButton from '../Buttons/СollectivesButton/СollectivesButton'
import SignInButton from '../UI/buttons/SignInButton/SignInButton'
import SearchButton from '../Buttons/SearchButton/SearchButton'
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
        {useWindowSize() < 780 ? null : <ContactsHeader />}
        {useWindowSize() < 780 ? null : <ModVersion />}
        <Nav />
        <СollectivesButton
          onClick={onClickOpenCollMenu}
        />
        <SignInButton
          onClickSignInButton={onClickSignInButton}
          loggedIn={loggedIn}
          onClickSignOutButton={onClickSignOutButton}
        />
        <SearchButton />
        <RightMenuButton
          onClickOpenTopMenu={onClickOpenTopMenu}
        />
      </div>
    </header>
  )
}

export default Header
