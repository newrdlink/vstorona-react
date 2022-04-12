import React from 'react'
import { Link } from 'react-router-dom'
import './MyLink.css'

const MyLink = ({ name, path }) => {
  // console.log(name)

  return (
    <li className='my-link'>
      <Link to={path} className="my-link__item">{name}</Link>
    </li>

  )
}

export default MyLink