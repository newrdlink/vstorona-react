import React from 'react'
import './SubtypeCollectives.css'

import CollectiveItem from '../CollectiveItem/CollectiveItem'

const SubtypeCollectives = ({ arrSubtype, chosen }) => {

  const subtype = arrSubtype[0]?.subtype

  return (
    <li className="subtype-collectives">
      <h6 className="subtype-collectives__title">{chosen || subtype}</h6>
      {
        arrSubtype.map(el => <CollectiveItem {...el} key={el._id} />)
      }

    </li>
  )
}

export default SubtypeCollectives
