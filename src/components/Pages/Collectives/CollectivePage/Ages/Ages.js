import React from "react"
import './Ages.css'

const Ages = ({ from, to }) => {

  return (
    <div className="ages-lesson">
      <h6 className="ages-lesson__title">возраст</h6>
      <p className="age-lesson">{`от ${from} до ${to} лет`}</p>
    </div>
  )
}

export default Ages
