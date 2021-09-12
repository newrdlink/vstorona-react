import React, { useEffect, useState } from 'react'
import './Dance.css'

import apiDance from '../../../../utils/ApiDance'

import Carusel from '../Carusel/Carusel'

const Dance = () => {
  const [dancePage, setDancePage] = useState({ images: [{ link: "temp" }], days: ['1', '2'], startTime: '1', compositionServices: ["temp"] })
  // console.log(dancePage)
  useEffect(() => {
    apiDance.getDance()
      .then((dances) => {
        const [page] = dances
        setDancePage(page)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="dance">
      <div className="dance__image-container">
        <img className="dance__image"
          src={dancePage.images[0].link}
          alt={dancePage.images[0].name} />
      </div>
      <h6 className="dance__title">{dancePage.title}</h6>
      <p className="dance__subtitle">{dancePage.subtitle}</p>
      <div className="dance__work-info">
        <p className="dance__work-time">
          {dancePage?.startTime + " " + dancePage?.endTime}
        </p>
        <div className="dance__work-days">
          {dancePage?.days.map(day => <p className="dance__work-day" key={day}>{day}</p>)}
        </div>
      </div>
      <h5 className="dance__description">{dancePage.description}</h5>
      <div className="dance__composition">
        <div className="dance__composition-items">
          <p className="dance-composition-title">Посетителей ждут:</p>
          {
            dancePage.compositionServices.map((item => <p className="dance__composition-item" key={item}>{item}</p>))
          }
          <a href="https://vk.com" target="_blank" rel="noreferrer" className="dance__composition-link">вконтакте</a>
        </div>
        <Carusel
          images={dancePage?.images}
        />

      </div>
    </section>
  )
}

export default Dance
