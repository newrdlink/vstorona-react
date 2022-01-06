import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import './NewsPage.css'

// import NavPage from '../../../NavPage/NavPage';
// import { infoPages } from '../../../../config/infoPages';
import { getNews, setNews, removeNews } from '../../../../utils/currentNews'
import apiNews from '../../../../utils/ApiNews'
import Carusel from '../../Services/Carusel/Carusel'
import SocialLinksShare from '../../../UI/SocialLinksShare/SocialLinksShare';



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
      // removeNews()
    }
  }, [id])

  // console.log(newsAll)

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

      {/* <div className='news-page__submenu'>
        <button type="button" onClick={() => history.push(`/news/${`61c1a3879fa19b3e468f028f`}`)}>prev</button>
        <button type="button">next</button>
        <SocialLinksShare />
      </div> */}

    </main>
  )
}

export default NewsPage
