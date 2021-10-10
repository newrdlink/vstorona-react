import React, { useState } from 'react'
import './News.css'

import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import PageTitle from '../../PageTitle/PageTitle'
import NavPage from '../../NavPage/NavPage'

import { infoPages } from '../../../config/infoPages'
import contentTitle from '../../../helpers/contentTitle'
import NewsBox from './NewsBox/NewsBox'

import { newsItems } from '../../../config/temp/newsItems'

const News = ({ currentPath }) => {
  const [countNews, setCountNews] = useState(4)

  const pageInfo = contentTitle({ currentPath, infoPages })

  const countNewsHandler = () => setCountNews(countNews + 4)

  const isAreMoreNews = () => newsItems.length >= countNews

  // console.log(isAreMoreNews())

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
      <NewsBox
        newsList={newsItems}
        countNews={countNews}
      />
      {
        isAreMoreNews() &&
        <button
          type="button"
          onClick={() => countNewsHandler()}
          className="news__button-add">показать ещё</button>
      }

    </section>
  )
}

export default News
