import React from 'react'
import './Intro.css'

import mainImage from '../../../images/main-background.jpg'

const Intro = () => {
  return (
    <section className="intro">
      <img alt="Главная Фотография" src={mainImage} className="intro__img" />

    </section>
  )
}

export default Intro
