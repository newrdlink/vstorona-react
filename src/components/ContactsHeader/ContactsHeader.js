import React from 'react'
import NumPhone from '../UI/NumPhone/NumPhone'
import './ContactsHeader.css'

const ContactsHeader = () => {
  return (
    <div className="contacts-header">
      <NumPhone place="header" />
      <p className="contacts__address">ул. Смолячкова 13</p>
    </div>
  )
}

export default ContactsHeader