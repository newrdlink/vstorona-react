import React from 'react'
import './NavHeader.css'
import NavItem from '../NavItem/NavItem'
import { navItems } from '../../config/navItems'

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        {
          navItems.map((item) => {
            const { id, name, path } = item
            return <NavItem name={name} path={path} key={id} />
          })
        }
      </ul>
    </nav>
  )
}

export default Nav
