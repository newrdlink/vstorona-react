import React from 'react'
import './Accessible.css'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'

import { infoAccessible } from '../../../constants/accessible'

import AccessibleBlock from './AccessibleBlock/AccessibleBlock'

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
    </main>
  )
}

export default Accessible
