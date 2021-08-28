import React from 'react'
import './Collective.css'

import WorkersBox from '../../../WorkersBox/WorkersBox'

const Collective = ({
  pageInfo,
  workers,
  onClickAddWorker,
  onClickEditWorker,
  onClickRemoveWorker,
  loggedIn }) => {

  // console.log(pageInfo)

  return (
    <section className="collective">
      <WorkersBox
        workers={workers}
        onClickAdd={onClickAddWorker}
        onClickEdit={onClickEditWorker}
        onClickRemove={onClickRemoveWorker}
        loggedIn={loggedIn}
      />
    </section>
  )
}

export default Collective
