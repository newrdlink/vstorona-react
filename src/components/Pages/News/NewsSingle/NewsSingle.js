import React from 'react'
import { useHistory } from 'react-router-dom'
import './NewsSingle.css'

import NewsDate from './NewsDate/NewsDate'
import SingleLinkOnPage from '../../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'
import { setNews } from '../../../../utils/currentNews'
import ButtonsBox from '../../../UI/ButtonsBox/ButtonsBox'

const NewsSingle = (props) => {
  // console.log(props)
  const { images, createdAt, title, subtitle, _id, onClickRemove, loggedIn } = props
  const history = useHistory()
  const onClickHandler = () => setNews(props)

  const titleForCard = () => title.length > 40 ? title.slice(0, 40) + ". . ." : title
  const subtitleForCard = () => subtitle.length > 120 ? subtitle.slice(0, 120) + ". . ." : title

  return (
    <li className="single-news">
      <NewsDate date={createdAt} />
      <div className="single-news__img-container">
        <img src={images[0]} alt="#" className="single-news__image" />
        {
          loggedIn ? <ButtonsBox
            place="news-card"
            onClickAdd={() => history.push('/news/add-news')}
            onClickEdit={() => console.log(_id)}
            onClickRemove={() => onClickRemove(_id)}
          /> : null
        }

      </div>
      <h6 className="single-news__title">{titleForCard()}</h6>
      <p className="single-news__subtitle">{subtitleForCard()}</p>
      <SingleLinkOnPage
        to={`${"/news/" + _id}`}
        bodyName="подробнее"
        place="single-news"
        colorArrow="#442836"
        onClickHandler={onClickHandler}
      />
    </li>
  )
}

export default NewsSingle
