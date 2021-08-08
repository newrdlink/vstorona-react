import React from 'react'
import './Header.css'
import LogoHeader from '../Logo/Logo'
import ContactsHeader from '../ContactsHeader/ContactsHeader'
import ModVersion from '../Buttons/ModVersion/ModVersion'
import Nav from '../NavHeader/NavHeader'
import СollectivesButton from '../Buttons/СollectivesButton/СollectivesButton'
import SignInButton from '../Buttons/SignInButton/SignInButton'
import SearchButton from '../Buttons/SearchButton/SearchButton'
import RightMenuButton from '../Buttons/RightMenuButton/RightMenuButton'


const Header = () => {
  return (
    <header className="header">
      <LogoHeader />
      <ContactsHeader />
      <ModVersion />
      <Nav />
      <СollectivesButton />
      <SignInButton />
      <SearchButton />
      <RightMenuButton/>
    </header>
  )
}

export default Header
