import React from 'react'
import { NavLink } from 'react-router-dom'
import './Logo.css'
import LogoHeader from '../../../src/images/logo/logo_КВС-white.png'
// import LogoFooter from '../../images/logo-footer.png'


const Logo = ({ place }) =>
  <NavLink to="/">
    <img
      src={place === "header" ? LogoHeader : LogoHeader}
      alt="Логотип"
      className={`logo logo_place_${place}`}
    />
  </NavLink>


export default Logo
