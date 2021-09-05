import React from 'react'
import './Composition.css'

import HallDescription from '../HallDescription/HallDescription'

const Composition = ({ currentHall, loggedIn, onClickAdd }) => {

  const { compositionServices, soundServices } = currentHall
  return (
    <div className="composition">
      <div className="composition__service">
        <HallDescription
          title="в стоимость аренды входит:"
          arrDescription={compositionServices}
          loggedIn={loggedIn}
          onClickAdd={onClickAdd}
        />
      </div>
      <div className="composition__service-audio">
        <HallDescription
          title="звуковое оборудование: "
          arrDescription={soundServices}
          loggedIn={loggedIn}
          onClickAdd={onClickAdd}
        />
      </div>
    </div>
  )
}

export default Composition
