import React from 'react'
// import { Link } from 'react-router-dom'
// import CollectiveItem from '../CollectiveItem/CollectiveItem'

import './TypeCollectives.css'
import SubtypeCollectives from '../SubtypeCollectives/SubtypeCollectives'

const TypeCollectives = ({ collectiveItems = [], type, onClickLink }) => {

  const subType = collectiveItems?.[0]?.type
  // console.log(collectiveItems)

  const subtypesCollective = collectiveItems.reduce((arr, el) => {
    if (!arr.find(item => item === el.subtype)) {
      arr.push(el.subtype)
    }
    return arr
  }, [])


  const childArr = collectiveItems.filter((el) => el.type === "Для детей")
  const adultArr = collectiveItems.filter((el) => el.type === "Для взрослых")

  return (
    <div className="type-collectives">
      <h4 className="type-collectives__title">{type || subType}</h4>


      {
        type ?
          <ul className="type-collectives__items">
            <SubtypeCollectives arrSubtype={childArr} chosen="Образцовые" onClickLink={onClickLink} />
            <SubtypeCollectives arrSubtype={adultArr} chosen="Народные" onClickLink={onClickLink} />
          </ul> :
          <ul className="type-collectives__items">
            {
              subtypesCollective.map((item) => {
                const arr = collectiveItems.filter((el) => el.subtype === item)
                // console.log(arr)
                return <SubtypeCollectives key={item} arrSubtype={arr} onClickLink={onClickLink} />
              })
            }
          </ul>

      }
      {/* <ul className="type-collectives__items">
        {
          subtypesCollective.map((item) => {
            const arr = collectiveItems.filter((el) => el.subtype === item)
            // console.log(arr)
            return <SubtypeCollectives key={item} arrSubtype={arr} />
          })
        }
      </ul> */}
    </div>

  )
}

export default TypeCollectives
