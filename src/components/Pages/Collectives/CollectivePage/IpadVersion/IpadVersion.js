import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getCollective, removeCollective, setCollective } from '../../../../../utils/currentCollective'
import { getToken } from '../../../../../utils/Token'
import Carusel from '../../../Services/Carusel/Carusel'
import ButtonsBox from '../../../../UI/ButtonsBox/ButtonsBox'
import CollectiveSupervisor from '../CollectiveSupervisor/CollectiveSupervisor'
import TimeLesson from '../TimeLesson/TimeLesson'
import Ages from '../Ages/Ages'
import SupervisorPhone from '../SupervisorPhone/SupervisorPhone'
import LessonPay from '../LessonPay/LessonPay'

import apiCollectives from '../../../../../utils/ApiCollectives'
import './IpadVersion.css'

const IpadVersion = ({ loggedIn, dataUpdate }) => {

  const [currentCollective, setCurrentCollective] = useState({ images: [] })
  const { id } = useParams()
  const history = useHistory()

  const { images = [], name, time, ageEnd, ageStart, phone, description = "", chosen, type, price } = currentCollective

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
    } else {
      setCurrentCollective(currentCollective)
    }
  }, [id])
  // const dataIsUpdate = () => setUpdateData(!updateData)
  const onClickRemove = () => {
    const jwt = getToken()

    apiCollectives.deleteCollective(id, jwt)
      .then((res) => {
        // console.log(res)
        // dataIsUpdate()
        dataUpdate()
        removeCollective()
        history.push('/collectives')
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <div className="collective-page__descriptions">
        <div className="collective-page__descriptions-info">
          <h1 className="collective-page__title">{isChosen(chosen) + name}</h1>
          <Carusel place="collective" images={arrForCarusel} />
          {
            arrWithDescr.map((descr) =>
              <p className="news-page__descriptions-item"
                key={descr}>{descr}</p>)
          }
        </div>

      </div>
      <div className="collective-page__conditions">
        <img src={images[0]} alt="Фотография педагога" className="collective-page__image" />
        {
          loggedIn ? <ButtonsBox
            place="collective-page"
            onClickAdd={() => history.push('/collectives/add-collective')}
            onClickEdit={() => history.push('/collectives/edit-collective')}
            onClickRemove={() => onClickRemove()}
          /> : null
        }
        <div className="collective-page__info">
          <CollectiveSupervisor
            info={currentCollective?.supervisor}
            position={currentCollective?.position}
          />
          <TimeLesson time={time} />
          <Ages from={ageStart} to={ageEnd} />
          <SupervisorPhone phone={phone} />
          <LessonPay price={price} />
        </div>
      </div>
    </>
  )
}

export default IpadVersion
