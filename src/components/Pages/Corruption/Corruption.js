import React from 'react'
import './Corruption.css'

import PageTitle from '../../PageTitle/PageTitle'
import NavPage from '../../NavPage/NavPage'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'

import { anticorItems } from '../../../config/temp/collectivesItems'
import DocContainer from './DocContainer/DocContainer'

const Corruption = ({ currentPath }) => {
  const pageInfo = contentTitle({ currentPath, infoPages })
  // console.log(anticorItems)

  const typeDocuments = anticorItems.reduce((arr, item) => {
    if (!arr.includes(item.type)) arr.push(item.type)
    return arr
  }, [])

  // console.log(typeDocuments)
  return (
    <section className="corruption">
      <NavPage currentPath={currentPath} />
      <PageTitle pageInfo={pageInfo} />
      {
        typeDocuments.map((typeDoc) => {
          const arr = anticorItems.filter(el => el.type === typeDoc)
          return <DocContainer items={arr} key={typeDoc} />
        })
      }
    </section>
  )
}

export default Corruption