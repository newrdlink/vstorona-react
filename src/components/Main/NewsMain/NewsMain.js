import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './NewsMain.css'

import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import MainTitle from '../MainTitle/MainTitle'
import NewsBox from '../../Pages/News/NewsBox/NewsBox'
import SingleLinkOnPage from '../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'


const NewsMain = ({ newsList = [], onClickRemoveNewsCard, loggedIn }) => {

  // const [idEditingNews, setIdEditingNews] = useState(0)
  // const history = useHistory()

  // useEffect(() => {
  //   console.log(window.innerWidth)
  // }, [])
  // const onClickEditNews = (_id) => {
  //  setIdEditingNews(_id)
  //  history.push('/news/edit-news')
  //}

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
        // onClickEdit={onClickEditNews}
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
