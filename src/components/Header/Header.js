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


const Header = ({ onClickSignInButton }) => {


  return (
    <header className="header">
      <Logo place="header" />
      <ContactsHeader />
      <ModVersion />
      <Nav />
      <СollectivesButton />
      <SignInButton
        onClickSignInButton={onClickSignInButton}
      />
      <SearchButton />
      <RightMenuButton />
    </header>
  )
}

export default Header
