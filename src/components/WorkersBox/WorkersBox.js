import React from 'react'
import './WorkersBox.css'

import Worker from '../Worker/Worker'
import ButtonAddWorker from '../UI/buttons/ButtonAddWorker/ButtonAddWorker'

const WorkersBox = ({
  workers,
  onClickAdd,
  onClickEdit,
  onClickRemove,
  loggedIn
}) => {

  return (
    <div className="workers">
      <ul className="workers-box">
        {
          workers.map((worker) => {
            const { _id: id, firstName, lastName, middleName, position, image } = worker

            return <Worker
              key={id}
              firstName={firstName}
              lastName={lastName}
              middleName={middleName}
              position={position}
              image={image}
              id={id}
              loggedIn={loggedIn}
              onClickAdd={onClickAdd}
              onClickEdit={onClickEdit}
              onClickRemove={onClickRemove}
            />
          })
        }

      </ul>
      {
        loggedIn && workers.length === 0 ?
          <ButtonAddWorker
            onClickAddWorker={onClickAdd}
          />
          : null
      }
    </div>

  )
}

export default WorkersBox
