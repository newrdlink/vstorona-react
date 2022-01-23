import React from 'react'
import './Intro.css'

import mainImage from '../../../images/1.jpg'
import logoSpb from '../../../images/Intro/1.png'

import SingleLinkOnPage from '../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__img-container">
        <img alt="Главная Фотография" src={mainImage} className="intro__img" />
      </div>

      <div className="intro__about-content">
        <div className="intro__about-container">
          <img className="intro__about-img" src={logoSpb} alt="Логотип Санкт-Петербурга" />
          <p className="intro__about">Санкт-Петербургское государственное бюджетное учреждение культуры</p>
        </div>
        <h1 className="intro__title">СПб ГБУК «Клуб «Выборгская сторона»</h1>
        <p className="intro__subtitle">С 1962 года создаем культурные тренды на Выборгской стороне</p>
        <SingleLinkOnPage
          to="/activity/events"
          bodyName="Ближайшие события"
          place="intro"
        />
      </div>
    </section>
  )
}

export default Intro
