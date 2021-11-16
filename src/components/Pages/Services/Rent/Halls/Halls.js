import React from 'react'
import './Halls.css'

import CardsBox from '../../../../CardsBox/CardsBox'
import { hallsItems } from '../../../../../config/hallsItems'

const Halls = ({ loggedIn, currentPath }) => {
  return (

    <section>
      <CardsBox
        arrayCards={hallsItems}
        currentPath={currentPath}
        place="rent"
      />
    </section>

  )
}

export default Halls
