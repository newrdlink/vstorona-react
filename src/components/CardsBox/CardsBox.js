import React from 'react'
import './CardsBox.css'
import Card from '../Card/Card'
// import { useRouteMatch } from 'react-router-dom'

const CardsBox = ({ arrayCards, currentPath = "", place = "" }) => {
  const currentPlace = currentPath.slice(1)
  // let { path } = useRouteMatch()

  // console.log(currentPlace)
  return (
    <ul className={`card-box card-box_place_${currentPlace || place}`}>
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
            place={place}
          />
        })
      }
    </ul>
  )
}

export default CardsBox
