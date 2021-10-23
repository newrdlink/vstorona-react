import React from 'react'
import './TopMenu.css'
import { Link } from 'react-router-dom'

import CloseButton from './CloseButton/CloseButton'

import { itemsMenu } from '../../config/itemsTopMenu'

import BlockMenu from './BlockMenu/BlockMenu'
import SingleLink from '../UI/SingleLink/SingleLink'

const TopMenu = ({ isActive, isTopMenuNoActive, onClickBtnClose, onClickLink }) => {
  //console.log(itemsMenu)
  const arrAllTypeBlockMenu = itemsMenu.reduce((arr, item) => {
    if (!arr.includes(item.type)) {
      arr.push(item.type)
    }
    return arr
  }, [])

  // console.log(arrAllTypeBlockMenu)
  return (
    <section
      className={
        `top-menu
        ${isActive && "top-menu_active"}
        ${isTopMenuNoActive && "top-menu_no-active"}
        `
      }
    // style={{ "animationPlayState": isActive && "running" }}
    >
      <CloseButton onClick={onClickBtnClose} />
      <div className="top-menu__blocks">
        {
          arrAllTypeBlockMenu.map((typeLinks) => {
            const arrLinks = itemsMenu.filter((link) => link.type === typeLinks)
            // console.log(typeLinks)
            return <BlockMenu listMenu={arrLinks} key={typeLinks} onClick={onClickLink} />
          })
        }

      </div>

      <Link to="/anti-corruption" className="top-menu__link" onClick={onClickBtnClose}>противоднйствие коррупции</Link>
      <Link to="/accessible" className="top-menu__link" onClick={onClickBtnClose}>доступная среда</Link>
      <Link to="/contacts" className="top-menu__link" onClick={onClickBtnClose}>контакты</Link>

      <div className="top-menu__social">

        <SingleLink
          name="Vkontakte"
          url="https://www.vk.com"
          place="top-menu"
          onClick={onClickBtnClose}
        />
        <SingleLink
          onClick={onClickBtnClose}
          name="Instagram"
          url="https://www.instagram.com/?hl=ru"
          place="top-menu"
        />

      </div>
    </section>
  )
}

export default TopMenu

