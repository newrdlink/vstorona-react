import React from 'react'
import './NewsBox.css'

import NewsSingle from '../NewsSingle/NewsSingle'

const NewsBox = ({ newsList }) => {

  return (
    <ul className="news-box">
      <NewsSingle />
    </ul>
  )
}

export default NewsBox
