import React from 'react'
import './History.css'
import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'
import i1 from '../../../../images/History/1.jpg'
import i2 from '../../../../images/History/2.jpg'


const History = ({ pageInfo }) => {
  // console.log(pageInfo)
  return (
    <section className="history">
      <PageTitleShadow pageInfo={pageInfo} />



      <div className="history__intro">
        <img alt="" src={i1} className="history__intro-img" />
        <div className="history__intro-text-container">
          <span className="history__text-span">
            Клуб был основан в 1962 году
          </span>
          <p className="history__text">
            Для работников производственного объединения по переработке пластмасс имени «Комсомольской правды».
          </p>
        </div>
        <img alt="" src={i2} className="history__intro-img-2" />
      </div>







      <div className="history__about">
        <div className="history__about-content">
          <p className="history__text">Клуб является подведомственным учреждением отдела культуры Администрации Выборгского района Санкт-Петербурга и ведет свою историю с 1962 года.
          </p>
          <p className="history__text">Он был создан как центр досуга для работников производственного объединения по переработке пластмасс имени «Комсомольской правды».
          </p>
        </div>
        <p className="history__text">На первые годы существования Клуба пришелся расцвет художественной самодеятельности и любительского творчества рабочих и жителей Выборгского района, многие из которых спустя годы привели сюда своих детей, а некоторые – стали руководителями творческих коллективов.
        </p>
      </div>
    </section>
  )
}

export default History
