import React from 'react'
import './SubtypeCollectives.css'

import CollectiveItem from '../CollectiveItem/CollectiveItem'

const SubtypeCollectives = ({ arrSubtype }) => {
  // const { collectives } = props
  // console.log(arrSubtype)
  // const {subtupe}
  const subtype = arrSubtype[0]?.subtype
  // console.log(subtype)
  return (
    <li className="subtype-collectives">
      <h6 className="subtype-collectives__title">{subtype}</h6>
      {
        arrSubtype.map(el => <CollectiveItem {...el} key={el._id} />)
      }

    </li>
  )
}

export default SubtypeCollectives
