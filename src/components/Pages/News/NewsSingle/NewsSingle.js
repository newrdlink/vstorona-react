import React from 'react'
import { useHistory } from 'react-router-dom'
import './NewsSingle.css'

import NewsDate from './NewsDate/NewsDate'
import SingleLinkOnPage from '../../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'
import { setNews } from '../../../../utils/currentNews'
import ButtonsBox from '../../../UI/ButtonsBox/ButtonsBox'

const NewsSingle = (props) => {
  // console.log(props)
  const { images, createdAt, title, subtitle, _id, onClickRemove, onClickEdit, loggedIn } = props
  const history = useHistory()
  const { location: { pathname: pathEnds } } = history
  const onClickHandler = () => setNews(props)

  const titleForCard = () => title.length > 34 ? title.slice(0, 34) + ". . ." : title
  const subtitleForCard = () => subtitle.length > 120 ? subtitle.slice(0, 120) + ". . ." : title

  const isMobileDevice = window.screen.availWidth <= 450
  // console.log(pathEnds)

  return (
    <li className="single-news">
      <NewsDate date={createdAt} />
      <div className="single-news__img-container">
        <img src={images[0]} alt="#" className="single-news__image" />
        {
          loggedIn && pathEnds.endsWith('news') ? <ButtonsBox
            place="news-card"
            onClickAdd={() => history.push('/news/add-news')}
            onClickEdit={() => onClickEdit(_id)}
            // onClickEdit={() => history.push('/news/edit-news')}
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
        colorArrow="#974269"
        onClickHandler={onClickHandler}
      />
      {
        (pathEnds.endsWith('/') && isMobileDevice) &&
        <SingleLinkOnPage
          to="/news"
          bodyName="Все новости"
          place="all-news-mobile"
          colorArrow="#974269"
        // onClickHandler={onClickHandler}
        />
      }
    </li>
  )
}

export default NewsSingle
