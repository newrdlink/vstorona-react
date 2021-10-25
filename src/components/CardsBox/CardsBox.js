import React from 'react'
import './CardsBox.css'
import Card from '../Card/Card'
// import { useRouteMatch } from 'react-router-dom'

const CardsBox = ({ arrayCards, currentPath = "", place = "", onClickHandler, subtypePath }) => {
  const currentPlace = currentPath.slice(1)
  // let { path } = useRouteMatch()

  // const isSubtypesPageCollective = currentPath === "/collectives/kids"
  // console.log(isSubtypesPAgeCollective)
  // console.log(arrayCards)

  let numberCardInCard = 0

  return (
    <ul className={`card-box card-box_place_${currentPlace || place}`}>
      {
        arrayCards.map((item) => {
          const { id, name, path, image, _id } = item
          numberCardInCard++
          return <Card
            onClickHandler={onClickHandler}
            key={numberCardInCard}
            // key={id || _id}
            name={name}
            // pathName={isSubtypesPageCollective ? subtypePath : path}
            pathName={path}
            image={image}
            id={id || _id}
            currentPlace={currentPlace}
            place={place}
            pos={numberCardInCard}
          />
        })
      }
    </ul>
  )
}

export default CardsBox
