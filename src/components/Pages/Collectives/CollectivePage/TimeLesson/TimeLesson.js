import React from 'react'
import './TimeLesson.css'

const TimeLesson = ({ time = [] }) => {

  return (
    <div className="time-lesson">
      <h6 className="time-lesson__title">время занятий</h6>
      {
        time.map(el => <p className="time-lesson__item" key={el}>{el}</p>)
      }
    </div>
  )
}

export default TimeLesson
