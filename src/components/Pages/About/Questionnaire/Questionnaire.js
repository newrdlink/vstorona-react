import React from 'react'
import './Questionnaire.css'
import LogoQuestionnaire from '../../../../images/About/questionnaire.png'

const Questionnaire = () => {
  return (
    <section className="questionnaire">
      <h6 className="questionnaire__title">Анкета</h6>
      <p className="questionnaire__subtitle">Опрос проводится в целях выявления мнения граждан о качестве условий оказания услуг учреждениями культуры.</p>
      <p className="questionnaire__subtitle">Пожалуйста, ответьте на вопросы анкеты. Ваше мнение позволит улучшить работу учреждения и повысить качество оказания услуг населению.</p>
      <p className="questionnaire__subtitle">Конфиденциальность высказанного вами мнения о качестве условий оказания услуг учреждениями культуры гарантируется.</p>
      <img src={LogoQuestionnaire} alt="kjubnbg" className="questionnaire__image" />
      <a target="_blanc" className="questionnaire__link " href="https://docs.google.com/forms/d/e/1FAIpQLScZ5y09BqBP2k9sMeTjg94X3bOZ-JeJKQPOM2RfR2RI3tHy0A/viewform">Оценка оказания услуг в Санкт-Петербургском государственном бюджетном учреждении культуры «Клуб «Выборгская сторона»</a>
    </section>
  )
}

export default Questionnaire
