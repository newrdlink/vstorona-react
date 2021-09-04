import React from 'react'
import { useParams } from 'react-router-dom'
import './HallPage.css'


const HallPage = ({ hallItems }) => {
  const { type } = useParams()
  // console.log(type)
  const hall = hallItems.find(h => h.type === type)
  // console.log(hall)
  return (
    <section className="hall">
      <div className="hall__image-container">
        <img className="hall__image" src={hall.images[2].image} alt="jnferlk" />
      </div>
      <p className="hall__title">{hall.description.title}</p>
      <div className="hall__about-items">
        <button type="button" className="hall__order-btn">Забронировать</button>
        <div className="hall__about-item">
          <p className="hall__about-item-title">вместимость :</p>
          <p className="hall__about-item-roominess">до {hall.description.roominess} человек</p>
        </div>
        <div className="hall__about-item">
          <p className="hall__about-item-title">общая площадь :</p>
          <p className="hall__about-item-roominess">{hall.description.square} кв. м.</p>
        </div>
        <div className="hall__about-item">
          <p className="hall__about-item-title">стоимость :</p>
          <p className="hall__about-item-roominess">1 час &mdash; {hall.price} &#8381;</p>
        </div>
      </div>
      <div>

      </div>
    </section>

  )
}

export default HallPage

