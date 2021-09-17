import React from 'react'
import './Event.css'
import { Link, useRouteMatch } from 'react-router-dom'

import EventTime from './EventTime/EventTime'

const Event = ({ _id, startTime, title, subtitle, description, link, image }) => {
  const { path, url } = useRouteMatch()
  // console.log(pageInfo)
  console.log(image)
  return (
    <li className="event">
      <img src={image} alt="#" className="event__image" />
      <EventTime startTime={startTime} />
      <h3 className="event__title">{title}</h3>
      <p className="event__subtitle">{subtitle}</p>
      <Link to={url + '/' + _id} className="event__link">Подробнее</Link>
      <svg className="event__arrow">
        <path d="M13.5701 1.5601C13.5701 
        1.15633 13.2261 0.829018 12.8017 
        0.829018H5.88557C5.46116 0.829018 
        5.11712 1.15633 5.11712 1.5601C5.11712 
        1.96386 5.46116 2.29118 5.88557 
        2.29118H12.0332L12.0332 8.13982C12.0332 
        8.54358 12.3773 8.87089 12.8017 
        8.87089C13.2261 8.87089 13.5701 8.54358 
        13.5701 8.13982L13.5701 1.5601ZM1.74065 
        13.117L13.345 2.07705L12.2583 1.04315L0.653886 
        12.0831L1.74065 13.117Z" />
      </svg>
    </li>
  )
}

export default Event
