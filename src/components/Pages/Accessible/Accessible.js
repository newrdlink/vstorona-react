import React from 'react'
import './Accessible.css'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'

import { infoAccessible } from '../../../constants/accessible'

import AccessibleBlock from './AccessibleBlock/AccessibleBlock'
import SingleLink from '../../UI/SingleLink/SingleLink'

const Accessible = ({ currentPath }) => {
  const pageInfo = contentTitle({ currentPath, infoPages })
  const { title, blocks } = infoAccessible

  return (
    <main className="accessible">
      <NavPage
        currentPath={currentPath} />
      <PageTitle
        pageInfo={pageInfo}
      />
      <h3 className="accessible__title">{title}</h3>
      {
        blocks.map(block => <AccessibleBlock key={block.id} block={block} />)
      }
      {/* <SingleLinkOnPage
        to="https://disk.yandex.ru/i/EO1cU2yHkTgQiw"
        bodyName="Доступная среда"
        place="accessible"
      /> */}
      <ul className='accessible__links'>
        <li className='accessible__link'>
          <SingleLink
            name="Доступная среда"
            url="https://disk.yandex.ru/i/EO1cU2yHkTgQiw"
            place="accessible"
          />
        </li>
        <li className='accessible__link'>
          <SingleLink
            name="Приказ о назначении ответственного"
            url="https://disk.yandex.ru/i/8EJSrDcRu0L_fg"
            place="accessible"
          />
        </li>
        <li className='accessible__link'>
          <SingleLink
            name="Состояние доступности структурно-функциональных зон"
            url="https://disk.yandex.ru/i/V66jLBq_O_tSKA"
            place="accessible"
          />
        </li>
      </ul>
    </main>
  )
}

export default Accessible
