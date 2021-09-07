import React from 'react'
import './CaruselImage.css'

const CaruselImage = ({ image }) => {
  // console.log(image)
  return (
    <div className="image-container">
      <img
        src={image.link}
        alt={image.name}
        className="carusel-image"
      />
    </div>
  )
}

export default CaruselImage
