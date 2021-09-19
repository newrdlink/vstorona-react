import React from 'react'
import './EventPage.css'
import { useParams, useHistory } from 'react-router-dom';

import { getEvent } from '../../../../../utils/currentEvent'
import Carusel from '../../../Services/Carusel/Carusel'

const EventPage = () => {
  const history = useHistory();

  const currentEvent = getEvent()
  const { startTime, title, subtitle, description, _id, images } = currentEvent

  const arrWithDescr = description.split("    ")

  const arrImagesForCarusel = images.reduce((arr, item) => {
    let a = {}
    a.link = item
    a.name = "Фотография события"
    arr.push(a)
    return arr
  }, [])

  const dateEvent = new Date(startTime)
  const strDateEvent = `${dateEvent.getDate()}/${dateEvent.getMonth() + 1}/${dateEvent.getFullYear()}`
  const strTimeEvent = `${dateEvent.getHours()}:${dateEvent.getMinutes() || "00"}`

  // console.log(dateEvent)
  return (
    <section className="event-page">
      <div className="event-page__image-container">
        <img className="event-page__image" src={images[0]} alt="" />
      </div>
      <h1 className="event-page__title">{title}</h1>
      <div className="event__time-info">
        <p className="event__time-info-item">{strDateEvent}</p>
        <p className="event__time-info-item">{strTimeEvent}</p>
      </div>
      <div className="event-page__descriptions">
        <div className="event-page__descriptions-items">
          <h5 className="event-page__subtitle">{title}</h5>
          {
            arrWithDescr.map((descr) =>
              <p className="event-page__descriptions-item"
                key={descr}>{descr}</p>)
          }
        </div>
        <Carusel images={arrImagesForCarusel} place="event" />
      </div>
      <div className="event-page__links">
        <button type="button" onClick={() => history.goBack()}>вернутся</button>
      </div>
    </section>
  )
}

export default EventPage
