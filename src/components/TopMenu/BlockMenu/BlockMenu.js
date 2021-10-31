import React from "react"
import './BlockMenu.css'
import { Link } from "react-router-dom"

const BlockMenu = ({ listMenu = [], onClick }) => {
  // console.log(listMenu)

  return (
    <div className="block-menu">
      <h6 className="block-menu__title">{listMenu[0]?.type}</h6>
      <ul className="block-menu__items">
        {
          listMenu.map((item) => {
            return <li key={item.id} className="block-menu__item">
              <Link to={item.path} className="block-menu__link" onClick={onClick}>{item.name}</Link>
            </li>
          })
        }
      </ul>
    </div >
  )
}

export default BlockMenu
