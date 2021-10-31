import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CollectivePage.css'
import { getCollective, setCollective } from '../../../../utils/currentCollective'

import apiCollectives from '../../../../utils/ApiCollectives'
import Carusel from '../../Services/Carusel/Carusel'
import CollectiveSupervisor from './CollectiveSupervisor/CollectiveSupervisor'
import TimeLesson from './TimeLesson/TimeLesson'
import Ages from './Ages/Ages'
import SupervisorPhone from './SupervisorPhone/SupervisorPhone'
import LessonPay from './LessonPay/LessonPay'

const CollectivePage = ({ collectivesItems }) => {

  const [currentCollective, setCurrentCollective] = useState({ images: [] })
  const { id } = useParams()

  const { images = [], name, time, ageEnd, ageStart, phone, description = "", chosen, type } = currentCollective

  const isChosen = (chosen) => {
    if (chosen) {
      return type === "kids" ? "образцовый " : "народный "
    }
    return ""
  }

  const arrForCarusel = images.reduce((arr, item) => {
    let obj = {}
    obj.link = item
    obj.name = "Фотография коллектива"
    arr.push(obj)
    return arr
  }, [])

  const arrWithDescr = description?.split("    ")

  useEffect(() => {
    const currentCollective = getCollective()

    if (!currentCollective) {
      apiCollectives.getCollective(id)
        .then((collective) => {
          setCollective(collective)
          setCurrentCollective(collective)
        })
        .catch((error) => console.log(error))
      // const collective = collectivesItems.find(el => el._id === id)
      // setCurrentCollective(collective)
    } else {
      setCurrentCollective(currentCollective)
    }
  }, [id])

  return (
    <main className="collective-page">
      <div className="collective-page__descriptions">
        <div className="collective-page__descriptions-info">
          <h1 className="collective-page__title">{isChosen(chosen) + name}</h1>

          {
            arrWithDescr.map((descr) =>
              <p className="news-page__descriptions-item"
                key={descr}>{descr}</p>)
          }

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
          <TimeLesson time={time} />
          <Ages from={ageStart} to={ageEnd} />
          <SupervisorPhone phone={phone} />
          <LessonPay />
        </div>
      </div>
    </main>
  )
}

export default CollectivePage
