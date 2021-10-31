import React from 'react'
import './LessonPay.css'

const LessonPay = ({ price }) => {

  return (
    <div className="lesson-pay">
      <h6 className="lesson-pay__title">стоимость</h6>
      <p className="lesson-price">{price ? price : "Занятия бесплатные"}</p>
    </div>
  )
}

export default LessonPay