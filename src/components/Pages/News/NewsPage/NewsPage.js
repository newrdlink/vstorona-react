import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import './NewsPage.css'

// import NavPage from '../../../NavPage/NavPage';
// import { infoPages } from '../../../../config/infoPages';
import { getNews, setNews, removeNews } from '../../../../utils/currentNews'
import apiNews from '../../../../utils/ApiNews'
import Carusel from '../../Services/Carusel/Carusel'
import SocialLinksShare from '../../../UI/SocialLinksShare/SocialLinksShare'
import ReactMarkdown from 'react-markdown'

const NewsPage = ({ newsAll = [], currentPath }) => {

  const history = useHistory()
  const [currentNews, setCurrentNews] = useState({ images: [] })
  const { id } = useParams();
  // const currentNews = newsAll.find((item) => item._id === id)
  const { title = "", subtitle, description = "", createdAt, images = [] } = currentNews
  // console.log(images)
  const timeNews = new Date(createdAt)
  const strDateEvent = `${timeNews.getDate()}/${timeNews.getMonth() + 1}/${timeNews.getFullYear()}`

  const arrForCarusel = images.reduce((arr, item) => {
    let obj = {}
    obj.link = item
    obj.name = "Фотография новости"
    arr.push(obj)
    return arr
  }, [])

  const arrWithDescr = description.split("    ")

  useEffect(() => {
    // const currentNews = getNews()
    const currentNews = newsAll.find((el) => el._id === id)
    // console.log('1')
    // console.log(id)
    if (!currentNews) {
      // console.log('upDateNewsPage2')
      // console.log(2)
      // apiNews.getNews(id)
      //   .then((news) => {
      //     setNews(news)
      //     setCurrentNews(news)
      //   })
      //   .catch((error) => console.log(error))
    } else {
      // console.log("2")
      setNews(currentNews)
      setCurrentNews(currentNews)

      // console.log('upDateNewsPage3')
      // console.log(1)
      // removeNews()
    }
    return () => removeNews()
  }, [id, newsAll])

  const handlePrevNews = (idNews) => {
    const indexCurrentNews = newsAll.findIndex((el) => el._id === idNews)
    const prevNews = newsAll[indexCurrentNews - 1]
    const idPrevNews = prevNews?._id
    history.push(`/news/${idPrevNews}`)
  }

  const handleNextNews = (idNews) => {
    const indexCurrentNews = newsAll.findIndex((el) => el._id === idNews)
    const nextNews = newsAll[indexCurrentNews + 1]
    const idNextNews = nextNews?._id
    history.push(`/news/${idNextNews}`)
  }

  const isFirstNews = newsAll[0]?._id === currentNews._id
  const isLastNews = newsAll[newsAll.length - 1]?._id === currentNews._id

  return (
    <main className="news-page">

      <div className="news-page__content">

        <div className="news-page__info">
          <p className="news-page__time-info">{strDateEvent}</p>
          <h1 className="news-page__title">{title}</h1>
          <h6 className="news-page__subtitle">{subtitle}</h6>
          {
            arrWithDescr.map((descr) =>
              <ReactMarkdown className="news-page__descriptions-item"
                key={descr}>{descr}</ReactMarkdown>)
          }
        </div>
        <Carusel
          place="news-page"
          images={arrForCarusel}
        />
      </div>
      <div className='news-page__submenu'>
        <div className='news-page__buttons'>
          <button disabled={isFirstNews}
            type="button"
            onClick={() => handlePrevNews(id)}
            className={`news-page__button news-page__button_pos_left ${isFirstNews && "news-page__button_disabled"}`}>Предыдущая новость</button>
          <button disabled={isLastNews}
            type="button"
            onClick={() => handleNextNews(id)}
            className={`news-page__button news-page__button_pos_right ${isLastNews && "news-page__button_disabled"}`}>Следующая новость</button>
        </div>
        <SocialLinksShare currentNews={currentNews} />
      </div>
    </main>
  )
}

export default NewsPage
