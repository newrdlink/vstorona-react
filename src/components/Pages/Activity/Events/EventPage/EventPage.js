import React, { useEffect, useState } from 'react'
import './EventPage.css'
import { useParams, useHistory } from 'react-router-dom'
import apiEvents from '../../../../../utils/ApiEvents'
import { getEvent, setEvent } from '../../../../../utils/currentEvent'
import Carusel from '../../../Services/Carusel/Carusel'
import SocialLinksShare from '../../../../UI/SocialLinksShare/SocialLinksShare'
import ButtonHistoryBack from '../../../../UI/buttons/ButtonHistoryBack/ButtonHistoryBack'
import ImagePopup from '../../../../UI/popups/ImagePopup/ImagePopup'
import ReactMarkdown from 'react-markdown'

const EventPage = () => {

  const [currentEvent, setCurrentEvent] = useState({})
  const { id } = useParams()
  const history = useHistory()

  const { startTime, title = "", description = "", images = [], subtitle = "" } = currentEvent
  const arrWithDescr = description.split("    ")

  const arrImagesForCarusel = images.reduce((arr, item) => {
    let a = {}
    a.link = item
    a.name = "Фотография события"
    arr.push(a)
    return arr
  }, [])
  // const imagesForPopup = arrImagesForCarusel.slice(1)
  // console.log(imageForPopup)
  const dateEvent = new Date(startTime)
  const strDateEvent = `${dateEvent.getDate()}/${dateEvent.getMonth() + 1}/${dateEvent.getFullYear()}`
  const strTimeEvent = `${dateEvent.getHours()}:${dateEvent.getMinutes() || "00"}`

  const titleForPageEvent = () => title.length > 60 ? title.slice(0, 60) + ". . ." : title

  useEffect(() => {
    const currentEvent = getEvent()
    if (!currentEvent) {
      apiEvents.getEvent(id)
        .then((event) => {
          setEvent(event)
          setCurrentEvent(event)
        })
        .catch((error) => console.log(error))
    } else {
      setCurrentEvent(currentEvent)
    }
  }, [id])
  // console.log(dateEvent)

  const [image, setImage] = useState('')

  const onClickChangeImage = (image, evt) => {
    const index = images.indexOf(image)

    if (evt.target.name === "back" && index !== 0) {
      return setImage(images[index - 1])
    }
    if (evt.target.name === "next" && index !== images.length - 1) {
      return setImage(images[index + 1])
    }
    index === 0 ? setImage(images[`${images.length - 1}`]) : setImage(images[0])
  }

  return (
    <section className="event-page">
      <div className="event-page__image-container">
        <img className="event-page__image" src={images[0]} alt="" />
      </div>
      <h1 className="event-page__title">{titleForPageEvent()}</h1>
      <div className="event__time-info">
        <p className="event__time-info-item">{strDateEvent}</p>
        <p className="event__time-info-item">{strTimeEvent}</p>
      </div>
      <div className="event-page__descriptions">
        <div className="event-page__descriptions-items">
          <h5 className="event-page__subtitle">{subtitle}</h5>
          {
            arrWithDescr.map((descr) =>
              <ReactMarkdown className="event-page__descriptions-item"
                key={descr}>{descr}</ReactMarkdown>)
          }
        </div>
        <Carusel
          images={arrImagesForCarusel}
          place="event"
          onClickImage={(link) => setImage(link)}
        />
      </div>
      <div className="event-page__links">
        <ButtonHistoryBack name="Вернуться" onClick={() => history.goBack()} />
        <SocialLinksShare />
      </div>
      <ImagePopup
        onClose={() => setImage('')}
        images={arrImagesForCarusel}
        image={image}
        onClickChangeImage={onClickChangeImage}
      />
    </section>
  )
}

export default EventPage