import React from 'react'
import './Worker.css'
import addWorkerImg from '../../../src/images/UI/add_worker.png'

import ButtonsBox from '../UI/ButtonsBox/ButtonsBox'

const Worker = ({
  id,
  firstName,
  lastName,
  middleName,
  position,
  image = '',
  loggedIn,
  onClickAdd,
  onClickEdit,
  onClickRemove
}) => {

  return (
    <li className="worker">
      <p className="worker__name">{lastName + " " + firstName}</p>
      <p className="worker__name">{middleName}</p>
      <div className="worker__img-container">
        <img className="worker__img" alt="" src={image || addWorkerImg} />
        <p className="worker__position">{position}</p>
      </div>
      {loggedIn ?
        <ButtonsBox
          id={id}
          // onClickRmBtn={onClickRmBtn}
          loggedIn={loggedIn}
          onClickAdd={() => onClickAdd()}
          onClickEdit={() => onClickEdit(id)}
          onClickRemove={() => onClickRemove(id)}
        /> : null
      }

    </li>
  )
}

export default Worker
