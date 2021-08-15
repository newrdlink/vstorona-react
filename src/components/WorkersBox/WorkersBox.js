import React from 'react'
import './WorkersBox.css'

import Worker from '../Worker/Worker'
import ButtonAddWorker from '../UI/buttons/ButtonAddWorker/ButtonAddWorker'

const WorkersBox = ({ workers, onClickAddWorker, loggedIn }) => {


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
            />
          })
        }

      </ul>
      {
        loggedIn ?
          <ButtonAddWorker
            onClickAddWorker={onClickAddWorker}
          />
          : null
      }

    </div>

  )
}

export default WorkersBox
