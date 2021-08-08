import React from 'react'
import NumPhone from '../NumPhone/NumPhone'
import './ContactsHeader.css'

const ContactsHeader = ()=> {
  return (
    <div className="contacts">
      <NumPhone/>
      <p className="contacts__address">ул. Смолячкова 13</p>
    </div>
  )
}

export default ContactsHeader