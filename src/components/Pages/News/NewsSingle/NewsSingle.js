import React from 'react'
import { Link } from 'react-router-dom'
import './NewsSingle.css'

import NewsDate from './NewsDate/NewsDate'
import SingleLinkOnPage from '../../../UI/buttons/SingleLinkOnPage/SingleLinkOnPage'

const NewsSingle = (props) => {
  // console.log(props)
  const { image, date, title, subtitle, description, _id } = props

  return (
    <li className="single-news">
      <NewsDate date={date} />
      <div className="single-news__img-container">
        <img src={image} alt="#" className="single-news__image" />
      </div>
      <h6 className="single-news__title">{title}</h6>
      <p className="single-news__subtitle">{subtitle}</p>
      {/* <Link to={`${"/" + _id}`} className="single-news__link">подробнее</Link> */}
      <SingleLinkOnPage
        to={`${"/news/" + _id}`}
        bodyName="подробнее"
        place="single-news"
        colorArrow="#442836"
      />
    </li>
  )
}

export default NewsSingle
