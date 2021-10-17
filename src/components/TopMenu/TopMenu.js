import React from 'react'
import './TopMenu.css'

import CloseButton from './CloseButton/CloseButton'

const TopMenu = ({ isActive, onClick }) => {

  return (
    <section className={`top-menu ${isActive && "top-menu_active"}`}>
      <CloseButton onClick={onClick} />
    </section>
  )
}

export default TopMenu

