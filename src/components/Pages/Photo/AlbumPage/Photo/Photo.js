import React from "react"
import './Photo.css'

const Photo = ({ link, title, onClickImage }) => {

  return (
    <li className="photo-container" onClick={() => onClickImage(link)}>
      <img
        src={link}
        alt={`Фотография ${title}`}
        className="photo-container__image"
      // onClick={() => onClickImage(link)}
      />
    </li>
  )
}

export default Photo
