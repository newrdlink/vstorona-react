import React from 'react'
import './Circle.css'


const Circle = ({ isActive, clickOnCircle, currentImage }) => {

  const onClickCircle = () => clickOnCircle(currentImage)

  return (
    <svg onClick={onClickCircle} width="10" height="10" fill={(isActive && "#974269") || "none"} className="circle-btn">
      <circle cx="5" cy="5" r="4.5" stroke={(isActive && "#974269") || "#442836"} />
    </svg>
  )
}


export default Circle
