import React from 'react'
import './CollectiveSupervisor.css'

const CollectiveSupervisor = ({ info, position = [] }) => {
  // console.log(info)
  // console.log(position)
  return (
    <div className="supervisor">
      <h5 className="supervisor__title">Руководитель:</h5>
      <h6 className="supervisor__name">{info}</h6>
      {
        position.map(el => <p className="supervisor__description" key={el}>{el}</p>)
      }
    </div>
  )
}

export default CollectiveSupervisor
