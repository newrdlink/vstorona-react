import React from 'react'
import './Logo.css'
import LogoHeader from '../../images/logo-header.png'
import LogoFooter from '../../images/logo-footer.png'


const Logo = ({ place }) =>
  <img
    src={place === "header" ? LogoHeader : LogoFooter}
    alt="Логотип"
    className={`logo logo_place_${place}`}
  />

export default Logo
