import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './NewsPage.css'

// import NavPage from '../../../NavPage/NavPage';
// import { infoPages } from '../../../../config/infoPages';
import { getNews, setNews } from '../../../../utils/currentNews'
import apiNews from '../../../../utils/ApiNews'
import Carusel from '../../Services/Carusel/Carusel';



const NewsPage = ({ newsAll = [], currentPath }) => {

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

  // console.log(title.slice(0, 70))

  const arrWithDescr = description.split("    ")

  useEffect(() => {
    const currentNews = getNews()
    if (!currentNews) {
      apiNews.getNews(id)
        .then((news) => {
          setNews(news)
          setCurrentNews(news)
        })
        .catch((error) => console.log(error))
    } else {
      setCurrentNews(currentNews)
    }
  }, [id])

  return (
    <main className="news-page">

      <div className="news-page__content">

        <div className="news-page__info">
          <p className="news-page__time-info">{strDateEvent}</p>
          <h1 className="news-page__title">{title}</h1>
          <h6 className="news-page__subtitle">{subtitle}</h6>

          {
            arrWithDescr.map((descr) =>
              <p className="news-page__descriptions-item"
                key={descr}>{descr}</p>)
          }
        </div>
        <Carusel
          place="news-page"
          images={arrForCarusel}
        />
      </div>
    </main>
  )
}

export default NewsPage