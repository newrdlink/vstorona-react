import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './NewsMain.css'

import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import MainTitle from '../MainTitle/MainTitle'
import NewsBox from '../../Pages/News/NewsBox/NewsBox'
import SingleLinkOnPage from '../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'

const NewsMain = ({ newsList = [], onClickRemoveNewsCard, loggedIn }) => {

  const isMobileDevice = window.screen.availWidth <= 450

  // const [idEditingNews, setIdEditingNews] = useState(0)
  // const history = useHistory()

  // useEffect(() => {
  //   console.log(window.innerWidth)
  // }, [])
  // const onClickEditNews = (_id) => {
  //  setIdEditingNews(_id)
  //  history.push('/news/edit-news')
  //}
  // console.log(newsList)

  return (
    <section className="news-main">
      <PageTitleShadow
        place="news-main"
        title="новости &#8226; новости"
        startPosition={isMobileDevice ? -3300 : -1400}
      />
      <MainTitle
        title="новости"
        place="news-main"
      />
      <NewsBox
        newsList={isMobileDevice ? newsList.slice(0, 1) : newsList}
        // onClickEdit={onClickEditNews}
        onClickRemove={onClickRemoveNewsCard}
        loggedIn={loggedIn}
      // count={window.innerWidth}
      />
      {
        isMobileDevice ? null :

          <SingleLinkOnPage
            to="/news"
            bodyName="все новости"
            place="news-main"
            colorArrow="#974269"
          />
      }
    </section>
  )
}

export default NewsMain
