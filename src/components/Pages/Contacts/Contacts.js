import React from 'react'
import './Contacts.css'

import NavPage from '../../NavPage/NavPage'
import ContactsMain from '../../Main/ContactsMain/ContactsMain'

import { useTitle } from '../../../helpers/createTitlePage'

const Contacts = ({ currentPath }) => {

  useTitle("Контакты")

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
