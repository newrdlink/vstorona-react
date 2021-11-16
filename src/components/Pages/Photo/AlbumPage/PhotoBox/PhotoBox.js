import React from 'react'
import './PhotoBox.css'
import Photo from '../Photo/Photo'

const PhotoBox = ({ images = [], onClickImage }) => {
  // console.log(images)
  return (
    <ul className="images-container">
      {
        images.map(el => <Photo key={el} link={el} onClickImage={onClickImage} />)
      }
    </ul>
  )
}

export default PhotoBox
