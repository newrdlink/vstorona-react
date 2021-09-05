import React from 'react'
import './Carusel.css'

import CaruselImage from './CaruselImage/CaruselImage'

const Carusel = ({ images }) => {

  return (
    <div className="carusel">
      {
        images.map((image) => <CaruselImage image={image} key={image.link} />)
      }
    </div>
  )
}

export default Carusel

