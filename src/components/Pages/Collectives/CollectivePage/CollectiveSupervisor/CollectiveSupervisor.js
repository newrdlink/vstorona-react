import React from 'react'
import './CollectiveSupervisor.css'

const CollectiveSupervisor = ({ info, position }) => {

  console.log(info)
  console.log(position)
  return (
    <div className="supervisor">
      <h5>Руководитель</h5>
      <h6>{info}</h6>
      {
        position.map(el => <p key={el}>{el}</p>)
      }
    </div>
  )
}

export default CollectiveSupervisor
