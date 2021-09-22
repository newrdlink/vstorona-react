import React from 'react'
import './News.css'

import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import PageTitle from '../../PageTitle/PageTitle'
import NavPage from '../../NavPage/NavPage'

import { infoPages } from '../../../config/infoPages'
import contentTitle from '../../../helpers/contentTitle'

const News = ({ currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })

  return (
    <section className="news">
      <NavPage
        currentPath={currentPath}
      />
      <PageTitleShadow
        place="news"
        title="новости &#8226; новости"
        startPosition={-300}
      />
      <PageTitle
        pageInfo={pageInfo}
      />
      <p>hgvreiopdv</p>
    </section>
  )
}

export default News
