import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CollectivePage.css'
import { getCollective, setCollective } from '../../../../utils/currentCollective'

import Carusel from '../../Services/Carusel/Carusel'

const CollectivePage = ({ collectivesItems }) => {

  const [currentCollective, setCurrentCollective] = useState({})
  const { id } = useParams()

  useEffect(() => {

    const currentCollective = getCollective()

    if (!currentCollective) {

      const collective = collectivesItems.find(el => el._id === id)
      setCollective(collective)
      setCurrentCollective(collective)
    } else {
      setCurrentCollective(currentCollective)
    }
  }, [collectivesItems, id])

  console.log(currentCollective)
  const { name } = currentCollective



  return (
    <main className="collective-page">
      <div className="collective-page__descriptions">
        <div className="collective-page__descriptions-info">
          <h1 className="collective-page__title">{name}</h1>
          <p className="collective-page__descroptions-item">описание</p>
        </div>
        <Carusel place="collective" images={[]} />
      </div>
    </main>
  )
}

export default CollectivePage
