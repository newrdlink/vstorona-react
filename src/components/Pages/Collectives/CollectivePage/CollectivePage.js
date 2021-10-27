import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CollectivePage.css'
import { getCollective, setCollective } from '../../../../utils/currentCollective'

const CollectivePage = ({ collectivesItems }) => {
  const [currentCollective, setCurrentCollective] = useState({})

  const { id } = useParams()

  useEffect(() => {

    const currentCollective = getCollective()

    if (!currentCollective) {
      console.log(1)
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
    <main>
      <p>{name}</p>
    </main>
  )
}

export default CollectivePage
