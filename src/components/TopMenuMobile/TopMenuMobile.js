import React from 'react'
// import { Link } from 'react-router-dom'
import './TopMenuMobile.css'

import MenuMobileItem from './MenuMobileItem/MenuMobileItem'
import { itemsMenu } from '../../config/itemsMobileMenu'


const TopMenuMobile = ({ isActive, clickOnLink }) => {

  return (
    <section className={`top-menu-mobile ${isActive && "top-menu-mobile_active"}`}>
      <button type="button" className='top-menu-mobile__close-button' onClick={clickOnLink} />
      <ul className='top-menu-mobile__items'>
        {
          itemsMenu.map((el) =>
            <MenuMobileItem
              title={el.type}
              id={el.id}
              links={el.links}
              key={el.id}
              clickOnLink={clickOnLink}
            />
          )
        }
      </ul>
    </section>
  )
}

export default TopMenuMobile
