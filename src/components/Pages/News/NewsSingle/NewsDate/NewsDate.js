import React from 'react'
import './NewsDate.css'

const NewsDate = ({ date }) => {

  const newsDate = new Date(date)

  const currentDay = () => newsDate.getDate() < 10 ? "0" + newsDate.getDate() : newsDate.getDate()

  const currentMonth = () => {
    const day = newsDate.getMonth() + 1
    if (day < 10) {
      return `${"0" + day}`
    } else {
      return day
    }
  }

  return (
    <p className="news-date">
      {currentDay() + "/" + currentMonth() + "/" + newsDate.getFullYear()}
    </p>
  )
}

export default NewsDate
