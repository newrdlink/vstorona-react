import React from 'react'
// import { Link } from 'react-router-dom'
// import CollectiveItem from '../CollectiveItem/CollectiveItem'

import './TypeCollectives.css'
import SubtypeCollectives from '../SubtypeCollectives/SubtypeCollectives'

const TypeCollectives = ({ collectiveItems = [], type }) => {

  const subType = collectiveItems?.[0]?.type
  // console.log(collectiveItems)

  const subtypesCollective = collectiveItems.reduce((arr, el) => {
    if (!arr.find(item => item === el.subtype)) {
      arr.push(el.subtype)
    }
    return arr
  }, [])

  // console.log(collectiveItems)

  return (
    <div className="type-collectives">
      <h4 className="type-collectives__title">{type || subType}</h4>

      <ul className="type-collectives__items">
        {
          subtypesCollective.map((item) => {
            const arr = collectiveItems.filter((el) => el.subtype === item)
            // console.log(arr)
            return <SubtypeCollectives key={item} arrSubtype={arr} />
          })
        }
      </ul>
    </div>

  )
}

export default TypeCollectives
