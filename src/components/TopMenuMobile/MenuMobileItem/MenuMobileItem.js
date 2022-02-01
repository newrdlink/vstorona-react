import React from 'react'
import { Link } from 'react-router-dom'
import './MenuMobileItem.css'

const MenuMobileItem = ({ id, title, links = [], clickOnLink }) => {

  return (
    <li className='menu-mobile-item'>
      <input type="checkbox" className='menu-mobile-item__input' id={id} />
      <label className={`menu-mobile-item__title${id === 1 && "-first"}`} htmlFor={id}>{title}</label>
      <div className='menu-mobile-item__link-container'>
        {
          links.map(el =>
            <Link key={el.name} to={el.path} className='menu-mobile-item__link' onClick={clickOnLink}>
              {el.name}
            </Link>)
        }
      </div>
    </li>
  )
}

export default MenuMobileItem
