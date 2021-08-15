import React from 'react'
import './Collective.css'

import WorkersBox from '../../../WorkersBox/WorkersBox'

const Collective = ({ pageInfo, workers, onClickAddWorker, loggedIn }) => {

  // console.log(pageInfo)

  return (
    <section className="collective">
      <WorkersBox
        workers={workers}
        onClickAddWorker={onClickAddWorker}
        loggedIn={loggedIn}
      />
    </section>
  )
}

export default Collective
