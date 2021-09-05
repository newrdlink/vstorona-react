import React from 'react'
import './HallDescription.css'

import HallDescriptionItem from './HallDescriptionItem/HallDescriptionItem'


const HallDescription = ({ title, arrDescription = [], loggedIn, onClickAdd }) => {

  return (
    <div className="hall-description">
      <p className="hall-description__title">{title}</p>
      <ul className="hall-description__items">
        {
          arrDescription.map((item) =>
            <HallDescriptionItem
              key={item}
              item={item}
              loggedIn={loggedIn}
              onClickAdd={onClickAdd}
            />)
        }
      </ul>
    </div>
  )
}

export default HallDescription
