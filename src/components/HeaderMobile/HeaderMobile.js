import React from 'react'
import './HeaderMobile.css'

import Logo from '../Logo/Logo'
import RightMenuButton from '../Buttons/RightMenuButton/RightMenuButton'

const HeaderMobile = ({ onClickMobileMenu }) => {

  const onClickMobile = _ => console.log('mobile menu click')

  return (
    <header className="header-mobile">
      <Logo />
      <RightMenuButton
        place="mobile-version"
        onClickMobile={onClickMobileMenu}

      />

    </header>
  )
}

export default HeaderMobile
