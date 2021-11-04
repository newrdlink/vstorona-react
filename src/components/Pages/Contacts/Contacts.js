import React from 'react'
import './Contacts.css'

import NavPage from '../../NavPage/NavPage'
import ContactsMain from '../../Main/ContactsMain/ContactsMain'

const Contacts = ({ currentPath }) => {

  return (
    <main className="contacts">
      <NavPage
        currentPath={currentPath}
      />
      <ContactsMain place="page" />
    </main>
  )
}

export default Contacts
