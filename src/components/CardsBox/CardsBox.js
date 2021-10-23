import React from 'react'
import './CardsBox.css'
import Card from '../Card/Card'
// import { useRouteMatch } from 'react-router-dom'

const CardsBox = ({ arrayCards, currentPath = "", place = "", onClickHandler }) => {
  const currentPlace = currentPath.slice(1)
  // let { path } = useRouteMatch()
  // console.log(currentPlace)
  // console.log(arrayCards)
  return (
    <ul className={`card-box card-box_place_${currentPlace || place}`}>
      {
        arrayCards.map((item) => {
          const { id, name, path, image, _id } = item
          return <Card
            onClickHandler={onClickHandler}
            key={id || _id}
            name={name}
            pathName={path}
            image={image}
            id={id || _id}
            currentPlace={currentPlace}
            place={place}
          />
        })
      }
    </ul>
  )
}

export default CardsBox
