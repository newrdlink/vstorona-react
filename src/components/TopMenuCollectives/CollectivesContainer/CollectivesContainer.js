import React from 'react'
import './CollectivesContainer.css'

import TypeCollectives from '../TypeCollectives/TypeCollectives'

const CollectivesContainer = ({ collectivesItems = [], onClickLink }) => {

  const typesCollective = collectivesItems.reduce((arr, el) => {
    if (!arr.find(item => item === el.type)) {
      arr.push(el.type)
    }
    return arr
  }, [])

  const chosenColectives = collectivesItems.filter(col => col.chosen === true)

  return (
    <div className="collectives-container">
      <TypeCollectives
        collectiveItems={chosenColectives}
        type="народные и образцовые"
        onClickLink={onClickLink}
      />
      {
        typesCollective.map((collectives) => {
          const arr = collectivesItems.filter(col => col.type === collectives)
          return <TypeCollectives collectiveItems={arr} key={collectives} onClickLink={onClickLink} />
        })
      }

    </div>
  )
}

export default CollectivesContainer
