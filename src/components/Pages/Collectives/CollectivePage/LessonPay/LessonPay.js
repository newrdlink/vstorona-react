import React from 'react'
import './LessonPay.css'

const LessonPay = ({ price }) => {

  const str = `${price} руб.`

  return (
    <div className="lesson-pay">
      <h6 className="lesson-pay__title">стоимость</h6>
      <p className="lesson-price">{price ? str : "Занятия бесплатные"}</p>
    </div>
  )
}

export default LessonPay