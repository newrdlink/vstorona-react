import React from 'react'
import './CardsBox.css'
import Card from '../Card/Card'

const CardsBox = ({ arrayCards }) => {
  // console.log(aboutUsItems)
  return (
    <ul className="card-box">
      {
        arrayCards.map((item) => {
          const { id, name, path, image } = item
          return <Card
            key={id}
            name={name}
            pathName={path}
            image={image}
            id={id} />
        })
      }
    </ul>
  )
}

export default CardsBox
