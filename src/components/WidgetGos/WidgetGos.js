import React from "react"
import './WidgetGos.css'

const WidgetGos = () => {

  return (
    <section className="widget-gos">
      <div id='js-show-iframe-wrapper'>
        <div className='pos-banner-fluid bf-41'>
          <div className='bf-41__decor'>
            <div className='bf-41__logo-wrap'>
              <img
                className='bf-41__logo'
                src='https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg'
                alt='Госуслуги'
              />
              <div className='bf-41__slogan'>Решаем вместе</div >
            </div >
          </div >
          <div className='bf-41__content'>
            <div className='bf-41__description'>
              <span className='bf-41__text'>
                Знаете, какая помощь от государства необходима, чтобы реализовать свой потенциал на максимум?
              </span >
              <span className='bf-41__text bf-41__text_small'>

              </span >
            </div >

            <div className='bf-41__bottom-wrap'>
              <div className='bf-41__btn-wrap'>
                {/* <!-- pos-banner-btn_2 не удалять; другие классы не добавлять --> */}
                <button
                  className='pos-banner-btn_2'
                  type='button'
                >Написать
                </button >
              </div >
            </div>
          </div >
        </div >
      </div >
    </section>

  )
}

export default WidgetGos
