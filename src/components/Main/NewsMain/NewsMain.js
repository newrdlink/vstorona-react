import React, { useEffect } from 'react'
import './NewsMain.css'

import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import MainTitle from '../MainTitle/MainTitle'
import NewsBox from '../../Pages/News/NewsBox/NewsBox'
import SingleLinkOnPage from '../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'


const NewsMain = ({ newsList = [], onClickRemoveNewsCard, loggedIn }) => {


  // useEffect(() => {
  //   console.log(window.innerWidth)
  // }, [])


  return (
    <section className="news-main">
      <PageTitleShadow
        place="news-main"
        title="новости &#8226; новости"
        startPosition={-1400}
      />
      <MainTitle
        title="новости"
        place="news-main"
      />
      <NewsBox
        newsList={newsList}
        onClickRemove={onClickRemoveNewsCard}
        loggedIn={loggedIn}
      // count={window.innerWidth}
      />
      <SingleLinkOnPage
        to="/news"
        bodyName="все новости"
        place="news-main"
        colorArrow="#974269"
      />
    </section>
  )
}

export default NewsMain
