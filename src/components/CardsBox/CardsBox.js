import React from 'react'
import Card from '../Card/Card'

const CardsBox = ({ arrayCards }) => {
  // console.log(aboutUsItems)
  return (
    <ul>
      {
        arrayCards.map((item) => {
          const { id, name, path, image } = item
          return <Card key={id} name={name} pathName={path} image={image} />
        })
      }
    </ul>
  )
}

export default CardsBox
