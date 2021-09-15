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


const Header = ({ onClickSignInButton, loggedIn, onClickSignOutButton }) => {


  return (
    <header className="header">
      <div className="header-container">
        <Logo place="header" />
        <ContactsHeader />
        <ModVersion />
        <Nav />
        <СollectivesButton />
        <SignInButton
          onClickSignInButton={onClickSignInButton}
          loggedIn={loggedIn}
          onClickSignOutButton={onClickSignOutButton}
        />
        <SearchButton />
        <RightMenuButton />
      </div>
    </header>
  )
}

export default Header
