import React from 'react'
import './CaruselImage.css'

const CaruselImage = ({ image, onClickImage }) => {
  // console.log(image)

  return (
    <div className="image-container" onClick={() => onClickImage(image.link)}>
      <img
        src={image.link}
        alt={image.name}
        className="carusel-image"
      />
    </div>
  )
}

export default CaruselImage
