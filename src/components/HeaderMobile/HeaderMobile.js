import React from 'react'
import './HeaderMobile.css'
import { useLocation } from 'react-router-dom'

import Logo from '../Logo/Logo'
import RightMenuButton from '../Buttons/RightMenuButton/RightMenuButton'

const HeaderMobile = ({ onClickMobileMenu, place }) => {

  let location = useLocation()
  const { pathname } = location
  // const onClickMobile = _ => console.log('mobile menu click')

  return (
    <header className={`header-mobile ${pathname !== "/" && "header-mobile_place_another-page"}`}>
      <Logo />
      <RightMenuButton
        place="mobile-version"
        onClickMobile={onClickMobileMenu}
      />

    </header>
  )
}

export default HeaderMobile
