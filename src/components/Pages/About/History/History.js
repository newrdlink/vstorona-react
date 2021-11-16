import React, { useState, useEffect } from 'react'
import './History.css'
import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'
import i1 from '../../../../images/History/1.jpg'
import i2 from '../../../../images/History/2.jpg'
import i3 from '../../../../images/History/3.png'
import i4 from '../../../../images/History/4.jpg'
import i5 from '../../../../images/History/5.jpg'


const History = ({ pageInfo }) => {
  const [activeHistoryAbout, setActiveHistoryAbout] = useState(false)
  // console.log(pageInfo)
  useEffect(() => {
    function handleScroll(event) {
      let scroll = this.scrollY;
      // console.log(scroll)
      if (scroll >= 420) {
        setActiveHistoryAbout(true)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  });


  return (
    <section className="history">
      <div className="history__container">
        <PageTitleShadow pageInfo={pageInfo} place="history" />
      </div>
      <div className="history__intro">
        <img alt="" src={i1} className="history__intro-img" />
        <div className="history__intro-text-container">
          <span className="history__text-span history__text-span_place_intro">
            Клуб был основан в 1962 году
          </span>
          <p className="history__text">
            Для работников производственного объединения по переработке пластмасс имени «Комсомольской правды».
          </p>
        </div>
        <img alt="" src={i2} className="history__intro-img-2" />
      </div>
      <div className={`history__about history__about_${activeHistoryAbout && 'active'}`}>
        <div className="history__about-container">
          <p className="history__text">Клуб является подведомственным учреждением отдела культуры Администрации Выборгского района Санкт-Петербурга и ведет свою историю с 1962 года.
          </p>
          <p className="history__text history__text_place_about">Он был создан как центр досуга для работников производственного объединения по переработке пластмасс имени «Комсомольской правды».
          </p>
        </div>
        <p className="history__text">На первые годы существования Клуба пришелся расцвет художественной самодеятельности и любительского творчества рабочих и жителей Выборгского района, многие из которых спустя годы привели сюда своих детей, а некоторые – стали руководителями творческих коллективов.
        </p>
      </div>
      <div className="history__rename">
        <p className="history__text-span history__text-span_place_about">
          В июне 1994 г. Клуб был  преобразован в муниципальное учреждение культуры Клуб «Выборгская сторона»
        </p>
        <img alt="" src={i3} className="history__rename-img" />
      </div>
      <div className="history__content">
        <p className="history__text history__text_place_content">
          На основании Распоряжения Комитета по Управлению городским имуществом Санкт-Петербурга в  2011 г. учреждение получило наименование «Санкт-Петербургское государственное бюджетное учреждение культуры «Клуб «Выборгская сторона» (СПб ГБУК «Клуб «Выборгская сторона»).
        </p>
        <p className="history__text history__text_place_content">
          История Клуба тесно переплетена с историей и жизнью как жителей района и города, так и с творческой биографией известных деятелей культуры.
          <span className="history__text history__text_place_content-span">Он был создан как центр досуга для работников производственного объединения по переработке пластмасс имени «Комсомольской правды».
          </span>
        </p>
        <p className="history__text history__text_place_content">
          На первые годы существования Клуба пришелся расцвет художественной самодеятельности и любительского творчества рабочих и жителей Выборгского района, многие из которых спустя годы привели сюда своих детей, а некоторые – стали руководителями творческих коллективов.
        </p>
      </div>
      <div className="history__end">
        <img alt="" src={i4} className="history__end-img" />
        <img alt="" src={i5} className="history__end-img" />
        <div className="history__end-container">
          <span className="history__text-span history__text-span_place_end">
            Клуб «Выборгская сторона» - центр культурной жизни своего микрорайона
          </span>
          <p className="history__text history__text_place_end">
            С момента основания и по настоящее время Клуб не только остается центром культурной жизни своего микрорайона, но и местом проведения  крупных районных и городских мероприятий.
          </p>
          <p className="history__text history__text_place_end">
            Диапазон его творческих проектов – от  занятий творческих студий до фестивалей городского и международного масштаба - сопоставим только с возрастным и социальным диапазоном посетителей: школьников, молодежи, людей старшего возраста. Идея культурного центра, открытого для всех, отвечающего самым разнообразным культурным запросам людей – по-прежнему остается главной в работе этого старейшего учреждения культуры Выборгского района.
          </p>
        </div>
      </div>

    </section>
  )
}

export default History
