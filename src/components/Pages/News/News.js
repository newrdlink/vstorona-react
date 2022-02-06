import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import './News.css'

import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'
import PageTitle from '../../PageTitle/PageTitle'
import NavPage from '../../NavPage/NavPage'

import { infoPages } from '../../../config/infoPages'
import contentTitle from '../../../helpers/contentTitle'
import NewsBox from './NewsBox/NewsBox'

import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddNews from '../../backend/AddNews/AddNews'
import EditNews from '../../backend/EditNews/EditNews'
import apiNews from '../../../utils/ApiNews'
import { getToken } from '../../../utils/Token'
// import useWindowSize from '../../../helpers/windowsWidth'

import NewsPage from './NewsPage/NewsPage'
import { useTitle } from '../../../helpers/createTitlePage'

const News = ({ currentPath, loggedIn }) => {
  const history = useHistory()

  const [countNews, setCountNews] = useState(4)
  const [newsAll, setNewsAll] = useState([])
  const [idEditingNews, setIdEditingNews] = useState(0)



  const pageInfo = contentTitle({ currentPath, infoPages })

  const countNewsHandler = () => setCountNews(countNews + countNews)

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

  const onClickEditNews = (_id) => {
    setIdEditingNews(_id)
    history.push('/news/edit-news')
  }

  useEffect(() => {
    let cleanupFunction = false

    apiNews.getNewsAll()
      .then((newsAll) => {
        if (!cleanupFunction) {
          const sortArrNews = newsAll.sort((a, b) => {
            const dateA = + (new Date(a.createdAt))
            const dateB = + (new Date(b.createdAt))
            if (dateA > dateB) {
              return -1
            }
            if (dateA < dateB) {
              return 1
            } return null
          })
          setNewsAll(sortArrNews)
        }
      })
      .catch((error) => console.log(error))

    return () => cleanupFunction = true;
  }, [])


  useEffect(() => {

    if (window.innerWidth < 780) {
      return setCountNews(2)
    }
    if (window.innerWidth < 1450) {
      setCountNews(3)
    }
  }, [])

  useTitle("Новости")

  return (
    <section className="news">
      {loggedIn && currentPath === "/news" ?
        <Link className="activity__add-event-button" to="/news/add-news">Добавить новость</Link> :
        null
      }
      <NavPage
        currentPath={currentPath}
      // changeNews={changeNews}
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
          <p>Copmonent with logic differance of date</p>
          <NewsBox
            newsList={newsAll}
            countNews={countNews}
            onClickRemove={onClickRemoveNewsCard}
            onClickEdit={onClickEditNews}
            loggedIn={loggedIn}
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

        <ProtectedRoute
          loggedIn={loggedIn}
          newsAll={newsAll}
          idEditingNews={idEditingNews}
          component={EditNews}
          path="/news/edit-news"
        />

        <Route exact path="/news/:id">
          <NewsPage
            newsAll={newsAll}
            currentPath={currentPath}
          // updateNews={updateNews}
          // setChangeNews={(changeNews) => setChangeNews(!changeNews)}
          />
        </Route>

      </Switch>
    </section>
  )
}

export default News
