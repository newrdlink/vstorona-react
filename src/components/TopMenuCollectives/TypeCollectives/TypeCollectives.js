import React from 'react'
import './TypeCollectives.css'
import SubtypeCollectives from '../SubtypeCollectives/SubtypeCollectives'
import renameTypeCollectives from '../../../helpers/renameTypeCollectives'

const TypeCollectives = ({ collectiveItems = [], type, onClickLink }) => {

  const engType = collectiveItems?.[0]?.type

  const subtypesCollective = collectiveItems.reduce((arr, el) => {
    if (!arr.find(item => item === el.subtype)) {
      arr.push(el.subtype)
    }
    return arr
  }, [])

  const childArr = collectiveItems.filter((el) => el.type === "kids")
  const adultArr = collectiveItems.filter((el) => el.type === "adults")

  return (
    <div className="type-collectives">
      <h4 className="type-collectives__title">{type || renameTypeCollectives(engType)}</h4>
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
    </div>

  )
}

export default TypeCollectives
