import React from "react"
import './Photo.css'

const Photo = ({ link, title }) => {
  return (
    <li className="photo-container" >

      <img src={link} alt={`Фотография ${title}`} className="photo-container__image" />

    </li>
  )
}

export default Photo
