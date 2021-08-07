import React from 'react'
import './Header.css'
import LogoHeader from '../Logo/Logo'
import ContactsHeader from '../ContactsHeader/ContactsHeader'


const Header = () => {
  return (
    <header className="header">
      <LogoHeader />
      <ContactsHeader/>
    </header>
  )
}

export default Header
