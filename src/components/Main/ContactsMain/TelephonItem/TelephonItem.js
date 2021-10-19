import React from 'react'
import './TelephonItem.css'

const TelephonItem = ({ name = "", number = "", place }) => {

  return (
    <div className={`tel-item tel-item_place_${place}`}>
      <h6 className="tel-item__title">{name}</h6>
      <p className="tel-item__number">{number}</p>
    </div>
  )
}

export default TelephonItem