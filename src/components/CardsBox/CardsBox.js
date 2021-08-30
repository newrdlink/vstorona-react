import React from 'react'
import './CardsBox.css'
import Card from '../Card/Card'

const CardsBox = ({ arrayCards, currentPath }) => {
  const currentPlace = currentPath.slice(1)
  // console.log(currentPlace)
  return (
    <ul className={`card-box card-box_place_${currentPlace}`}>
      {
        arrayCards.map((item) => {
          const { id, name, path, image } = item
          return <Card
            key={id}
            name={name}
            pathName={path}
            image={image}
            id={id}
            currentPlace={currentPlace}
          />
        })
      }
    </ul>
  )
}

export default CardsBox
