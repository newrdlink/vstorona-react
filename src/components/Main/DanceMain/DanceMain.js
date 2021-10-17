import React from 'react'
import './DanceMain.css'

import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import MainTitle from '../MainTitle/MainTitle'

const DanceMain = ({ danceInfo }) => {
  // console.log(danceInfo)
  return (
    <section className="dance-main">
      <PageTitleShadow
        place="dance-main"
        title="танцевальные вечера"
        startPosition={-4200}
      />
      <MainTitle
        title="танцевальные вечера"
        place="dance-main"
      />
      <div className="dance-main__content">
        <div className="dance-main__info">
          <h4 className="dance-main__title">{danceInfo.title}</h4>
          <div className="dance-main__work-info">
            <p className="dance-main__work-time">
              {danceInfo?.startTime + " " + danceInfo?.endTime}
            </p>
            <div className="dance-main__work-days">
              {danceInfo?.days.map(day => <p key={day} className="dance-main__work-day">{day}</p>)}
            </div>
            <p className="dance-main__subtitle">{danceInfo.subtitle}</p>
          </div>
        </div>
        <div className="dance-main__image-container">
          <img src={danceInfo.images[0].link} alt="#" className="dance-main__image" />
        </div>

      </div>
    </section>
  )
}

export default DanceMain
