import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Logo.css'
import LogoHeader from '../../../src/images/logo/logo_КВС-white.png'
// import LogoHeaderAnotherPage from '../../../src/images/logo/logo_КВС.png'
// import LogoFooter from '../../images/logo-footer.png'
const Logo = ({ place }) => {
  // console.log(typeof pathname)
  return (
    <NavLink to="/">
      <img
        src={LogoHeader}
        alt="Логотип"
        className={`logo logo_place_${place}`}
      />
    </NavLink>
  )
}


export default Logo
