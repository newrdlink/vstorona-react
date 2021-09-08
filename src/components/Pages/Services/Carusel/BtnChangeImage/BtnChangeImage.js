import React from 'react'
import './BtnChangeImage.css'
import Circle from '../Circle/Circle'



const BtnChangeImage = ({ listImages, count, clickOnCircle }) => {

  return (
    <div className="buttons-container">
      {
        listImages.map((item) => <Circle clickOnCircle={clickOnCircle} currentImage={item.pos} isActive={count === item.pos} key={item._id} />)
      }
    </div>
  )
}

export default BtnChangeImage
