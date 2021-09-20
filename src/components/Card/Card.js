import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom';
import './Card.css'

const Card = ({ name, pathName, image, id, currentPlace, place }) => {

  const { path, url } = useRouteMatch()
  // console.log(url)
  // console.log(path + pathName)
  return (
    <li className={`card card_place_${currentPlace || place}`}>
      <img alt="name" src={image} className={`card__image card__image_place_${place}`} />
      <h4 className="card__number">{`${'0' + id}`}</h4>
      <NavLink className="card__link" to={url + pathName}>
        {name}
        <svg className="card__arrow">
          <path d="M13.5701 1.5601C13.5701 
        1.15633 13.2261 0.829018 12.8017 
        0.829018H5.88557C5.46116 0.829018 
        5.11712 1.15633 5.11712 1.5601C5.11712 
        1.96386 5.46116 2.29118 5.88557 
        2.29118H12.0332L12.0332 8.13982C12.0332 
        8.54358 12.3773 8.87089 12.8017 
        8.87089C13.2261 8.87089 13.5701 8.54358 
        13.5701 8.13982L13.5701 1.5601ZM1.74065 
        13.117L13.345 2.07705L12.2583 1.04315L0.653886 
        12.0831L1.74065 13.117Z" />
        </svg>
      </NavLink>
    </li>
  )
}

export default Card
