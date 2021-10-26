import React from 'react'
import './CollectivesContainer.css'

import TypeCollectives from '../TypeCollectives/TypeCollectives'

const CollectivesContainer = ({ collectivesItems = [] }) => {

  const typesCollective = collectivesItems.reduce((arr, el) => {
    if (!arr.find(item => item === el.type)) {
      arr.push(el.type)
    }
    return arr
  }, [])

  const chosenColectives = collectivesItems.filter(col => col.chosen === true)

  return (
    <div className="collectives-container">
      <TypeCollectives collectiveItems={chosenColectives} type="народные и образцовые" />
      {
        typesCollective.map((collectives) => {
          const arr = collectivesItems.filter(col => col.type === collectives)
          return <TypeCollectives collectiveItems={arr} key={collectives} />
        })
      }

    </div>
  )
}

export default CollectivesContainer
