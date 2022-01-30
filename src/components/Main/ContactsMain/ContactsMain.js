import React from 'react'
import SingleLink from '../../UI/SingleLink/SingleLink'
import './ContactsMain.css'

import MainTitle from '../MainTitle/MainTitle'
import YandexMap from '../../YandexMap/YandexMap'
import TelephonItem from './TelephonItem/TelephonItem'

const ContactsMain = ({ place }) => {
  const isMobileDevice = window.screen.availWidth <= 450

  return (
    <section className={`contacts-main contacts-main_place_${place}`}>
      <MainTitle
        title="контакты"
        place="contacts-main"
      />
      <div className="contacts-main__container">
        {
          isMobileDevice ? null :
            <YandexMap
              place="contacts-main"
            />
        }
        <div className="contacts-main__content">
          <h6 className="contacts-main__title">СПб ГБУК "Клуб "Выборгская сторона"</h6>
          <div className="contacts-main__info-address">
            <p className="contacts-main__address contacts-main__address_place_address">г. Санкт Петербург, ул. Смолячкова, д. 13, ст. м. Выборгская </p>
            <div className="contacts-main__taxi-info">
              <p className="contacts-main__address">Автобусы: 14, 86</p>
              <p className="contacts-main__address">Трамваи: 20, 32, 38</p>
              <p className="contacts-main__address">Маршрутное такси: к262, к367, к152</p>
            </div>
          </div>

          <div className="contacts-main__tel">
            <div className="contacts-main__telephones">
              <TelephonItem
                name="Дежурный администратор"
                number="+7(812) 542-16-34"
              />
              <TelephonItem
                name="Директор"
                number="+7(812) 542-42-73"
              />
              <TelephonItem
                name="Культурно-массовый отдел"
                number="+7(812) 542-11-94"
              />
              <TelephonItem
                name="Бухгалтерия"
                number="+7(812) 542-64-53"
              />
            </div>
            <div className="contacts-main__email-day-social">
              <TelephonItem
                name="email"
                number="club-vs@yandex.ru"
              />
              <TelephonItem
                place="days"
                name="Время работы"
                number="ПН-ВС 10.00-22.00"
              />
              <div className="contacts-main__social-links">
                <h6 className="tel-item__title">Соцсети</h6>
                <SingleLink
                  name="Vkontakte"
                  url="https://www.vk.com"
                  place="contacts-main"
                />
                <SingleLink
                  place="contacts-main"
                  name="Instagram"
                  url="https://www.instagram.com/?hl=ru"
                />
              </div>
            </div>
          </div>
          {/* <div className="contacts-main__contact">
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default ContactsMain
