import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CollectivePage.css'
import { getCollective, setCollective } from '../../../../utils/currentCollective'

import Carusel from '../../Services/Carusel/Carusel'
import CollectiveSupervisor from './CollectiveSupervisor/CollectiveSupervisor'
import TimeLesson from './TimeLesson/TimeLesson'
import Ages from './Ages/Ages'
import SupervisorPhone from './SupervisorPhone/SupervisorPhone'
import LessonPay from './LessonPay/LessonPay'

const CollectivePage = ({ collectivesItems }) => {

  const [currentCollective, setCurrentCollective] = useState({ images: [] })
  const { id } = useParams()

  const { images, name, time, ageEnd, ageStart, phone } = currentCollective

  const arrForCarusel = images.reduce((arr, item) => {
    let obj = {}
    obj.link = item
    obj.name = "Фотография коллектива"
    arr.push(obj)
    return arr
  }, [])

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
  // const { name } = currentCollective



  return (
    <main className="collective-page">
      <div className="collective-page__descriptions">
        <div className="collective-page__descriptions-info">
          <h1 className="collective-page__title">{name}</h1>
          <p className="collective-page__descroptions-item">описание</p>
        </div>
        <Carusel place="collective" images={arrForCarusel} />
      </div>
      <div className="collective-page__conditions">
        <img src={images[0]} alt="Фотография педагога" className="collective-page__image" />
        <div className="collective-page__info">
          <CollectiveSupervisor
            info={currentCollective?.supervisor}
            position={currentCollective?.position}
          />
          <TimeLesson
            time={time}
          />
          <Ages
            from={ageStart}
            to={ageEnd}
          />
          <SupervisorPhone
            phone={phone}
          />
          <LessonPay />
        </div>
      </div>
    </main>
  )
}

export default CollectivePage
