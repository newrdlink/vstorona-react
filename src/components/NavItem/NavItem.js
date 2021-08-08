import React from "react"
import { NavLink } from 'react-router-dom'
import './NavItem.css'

const NavItem = ({ name, path }) => {
  return (
    <li className="item">
      <NavLink className="item__link" to={path}>
        {name}
      </NavLink>
    </li>
  )
}

export default NavItem
