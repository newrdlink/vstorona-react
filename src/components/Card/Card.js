import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom';
import './Card.css'

const Card = ({ name, pathName, image }) => {

  const { path, url } = useRouteMatch()
  // console.log(currentPath)
  console.log(path + pathName)
  return (
    <li className="card">
      <img alt="name" src={image} />
      <NavLink className="card__link" to={url + pathName}>
        {name}
      </NavLink>

    </li>
  )
}

export default Card
