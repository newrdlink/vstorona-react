import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './News.css'

import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import PageTitle from '../../PageTitle/PageTitle'
import NavPage from '../../NavPage/NavPage'

import { infoPages } from '../../../config/infoPages'
import contentTitle from '../../../helpers/contentTitle'
import NewsBox from './NewsBox/NewsBox'

import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddNews from '../../backend/AddNews/AddNews'
import apiNews from '../../../utils/ApiNews'
import { getToken } from '../../../utils/Token'

import NewsPage from './NewsPage/NewsPage'

const News = ({ currentPath, loggedIn }) => {
  const [countNews, setCountNews] = useState(4)
  const [newsAll, setNewsAll] = useState([])

  const pageInfo = contentTitle({ currentPath, infoPages })

  const countNewsHandler = () => setCountNews(countNews + 4)

  const isAreMoreNews = () => newsAll.length > countNews

  const onClickRemoveNewsCard = (_id) => {
    const jwt = getToken()

    apiNews.deleteNews(_id, jwt)
      .then((news) => {
        const { _id } = news

        const arrWithoutDeletedCard = newsAll.filter((item) => item._id !== _id)
        setNewsAll(arrWithoutDeletedCard)
      })
      .catch((error) => console.log(error))
    // console.log(1, _id)
  }
  // console.log(loggedIn)
  useEffect(() => {
    let cleanupFunction = false

    apiNews.getNewsAll()
      .then((newsAll) => {
        if (!cleanupFunction) {
          setNewsAll(newsAll)
        }
      })
      .catch((error) => console.log(error))

    return () => cleanupFunction = true;
  }, [])

  return (
    <section className="news">
      {loggedIn && currentPath === "/news" ?
        <Link className="activity__add-event-button" to="/news/add-news">Добавить новость</Link> :
        null
      }
      <NavPage
        currentPath={currentPath}
      />
      <Switch>
        <Route exact path="/news">
          <PageTitleShadow
            place="news"
            title="новости &#8226; новости"
            startPosition={-300}
          />
          <PageTitle
            pageInfo={pageInfo}
          />
          <p>Copmonent with logic diferance of date</p>
          <NewsBox
            newsList={newsAll}
            countNews={countNews}
            onClickRemove={onClickRemoveNewsCard}
          />
          {
            isAreMoreNews() &&
            <button
              type="button"
              onClick={() => countNewsHandler()}
              className="news__button-add">показать ещё</button>
          }
        </Route>

        <ProtectedRoute
          loggedIn={loggedIn}
          component={AddNews}
          path="/news/add-news"
        />

        <Route exact path="/news/:id">
          <NewsPage
            newsAll={newsAll}
            currentPath={currentPath}
          />
        </Route>

      </Switch>
    </section>
  )
}

export default News
