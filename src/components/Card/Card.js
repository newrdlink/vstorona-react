import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom';
import './Card.css'

const Card = ({ name, pathName, image, id }) => {

  const { path, url } = useRouteMatch()
  // console.log(currentPath)
  // console.log(path + pathName)
  return (
    <li className="card">
      <img alt="name" src={image} className="card__image" />
      <h4 className="card__number">{`${'0' + id}`}</h4>
      <NavLink className="card__link" to={url + pathName}>
        {name}
      </NavLink>

    </li>
  )
}

export default Card
