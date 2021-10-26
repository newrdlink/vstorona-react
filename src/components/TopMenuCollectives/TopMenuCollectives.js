import React from 'react'
import './TopMenuCollectives.css'

import CloseButton from '../TopMenu/CloseButton/CloseButton'
import SingleLink from '../UI/SingleLink/SingleLink'

import CollectivesContainer from './CollectivesContainer/CollectivesContainer'

const TopMenuCollectives = ({ isActive, isNoActive, onClickBtnClose, collectivesItems }) => {

  // console.log(collectivesItems)
  return (
    <section
      className={`top-menu ${isActive && "top-menu_active"} ${isNoActive && "top-menu_no-active"}`}>
      <CloseButton onClick={onClickBtnClose} />
      <CollectivesContainer
        collectivesItems={collectivesItems}
      />


      {/* <div className="top-menu__blocks">
        {
          arrAllTypeBlockMenu.map((typeLinks) => {
            const arrLinks = itemsMenu.filter((link) => link.type === typeLinks)
            // console.log(typeLinks)
            return <BlockMenu listMenu={arrLinks} key={typeLinks} onClick={onClickLink} />
          })
        }

      </div> */}

      {/* <Link to="/anti-corruption" className="top-menu__link" onClick={onClickBtnClose}>противоднйствие коррупции</Link>
      <Link to="/accessible" className="top-menu__link" onClick={onClickBtnClose}>доступная среда</Link>
      <Link to="/contacts" className="top-menu__link" onClick={onClickBtnClose}>контакты</Link> */}

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

export default TopMenuCollectives
