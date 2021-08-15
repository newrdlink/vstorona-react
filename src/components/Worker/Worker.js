import React from 'react'
import './Worker.css'
import addWorkerImg from '../../../src/images/UI/add_worker.png'

const Worker = ({ id, firstName, lastName, middleName, position, image = '', type, onClickAddWorker }) => {
  return (
    <li className="worker">
      <p className="worker__name">{lastName + " " + firstName}</p>
      <p className="worker__name">{middleName}</p>
      <div className="worker__img-container">
        <img className="worker__img" alt="" src={image || addWorkerImg} />
        <p className="worker__position">{position}</p>
      </div>
    </li>
  )
}

export default Worker
