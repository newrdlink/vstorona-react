import React from 'react'
import './NumPhone.css'
import PhoneIcon from '../icons/Phone/PhoneIcon'

const NumPhone = ({ place }) => <span className="phone">

  <a className={`phone__link phone__link_place_${place}`}
    href="tel:+78125421634">{place === 'footer' ? <PhoneIcon place={place} /> : null}{`+7 (812) 542 16 34`}</a>
</span>

export default NumPhone
