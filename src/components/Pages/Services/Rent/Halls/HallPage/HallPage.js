import React from 'react'
import { useParams } from 'react-router-dom'
import './HallPage.css'

import Carusel from '../../../Carusel/Carusel'
import Composition from '../../../Composition/Composition'


const HallPage = ({ hallItems }) => {

  const { type } = useParams()
  const currentHall = hallItems.find(h => h.type === type) ||
    { description: "templete for start", images: [{ link: "temp" }] }

  const { images } = currentHall
  // console.log(images)
  // console.log(currentHall)
  return (

    <section className="hall">
      <div className="hall__image-container">
        <img className="hall__image" src={currentHall.images[0].link} alt={currentHall.images[0].name} />
      </div>
      <p className="hall__title">{currentHall.description.title}</p>
      <div className="hall__about-items">
        <button type="button" className="hall__order-btn">забронировать</button>
        <div className="hall__about-item">
          <p className="hall__about-item-title">вместимость :</p>
          <p className="hall__about-item-roominess">до {currentHall.description.roominess} человек</p>
        </div>
        <div className="hall__about-item">
          <p className="hall__about-item-title">общая площадь :</p>
          <p className="hall__about-item-roominess">{currentHall.description.square} кв. м.</p>
        </div>
        <div className="hall__about-item">
          <p className="hall__about-item-title">стоимость :</p>
          <p className="hall__about-item-roominess">1 час &mdash; {currentHall.price} &#8381;</p>
        </div>
      </div>
      <div className="hall__description">
        <div className="hall__description-items">
          <p className="hall__description-title">описание</p>
          <ul className="hall__description-items">
            <li className="hall__description-item">{`общая площадь - ${currentHall.description.square} кв.М.`}</li>
            <li className="hall__description-item">фортепиано essex</li>
            <li className="hall__description-item">{`количество стульев - ${currentHall.description.chairs} шт.`}</li>
            <li className="hall__description-item">{`количество столов (90*120 см.) - ${currentHall.description.tables} шт.`}</li>
            <li className="hall__description-item">дополнительная расстановка мебели, предоставление скатертей и текстильных чехлов на стулья – по договоренности</li>
            <li className="hall__description-item">свободный wi-fi</li>
            <li className="hall__description-item">зал оснащен переносным рециркулятором</li>
          </ul>
        </div>
        <div className="images-page">
          <Carusel
            images={images}
          />
        </div>
      </div>
      <Composition />
    </section>

  )
}

export default HallPage

