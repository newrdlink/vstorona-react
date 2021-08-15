import React from 'react'
import './Collective.css'

import WorkersBox from '../../../WorkersBox/WorkersBox'

const Collective = ({ pageInfo }) => {

  // console.log(pageInfo)

  return (
    <section className="collective">
      <WorkersBox />
    </section>
  )
}

export default Collective
