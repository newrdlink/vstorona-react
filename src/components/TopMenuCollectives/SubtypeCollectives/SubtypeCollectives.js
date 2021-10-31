import React from 'react'
import './SubtypeCollectives.css'

import CollectiveItem from '../CollectiveItem/CollectiveItem'
import renameSubtypeCollectives from '../../../helpers/renameSubtypeCollectives'

const SubtypeCollectives = ({ arrSubtype, chosen, onClickLink }) => {

  const engSubtype = arrSubtype[0]?.subtype

  return (
    <li className="subtype-collectives">
      <h6 className="subtype-collectives__title">{chosen || renameSubtypeCollectives(engSubtype)}</h6>
      {
        arrSubtype.map(el =>
          <CollectiveItem {...el} key={el._id} onClickLink={onClickLink} arrSubtype={arrSubtype} />)
      }
    </li>
  )
}

export default SubtypeCollectives
