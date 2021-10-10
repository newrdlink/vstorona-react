import React, { useState, useEffect } from 'react'
import './NewsBox.css'

import NewsSingle from '../NewsSingle/NewsSingle'

const NewsBox = ({ newsList = [] }) => {

  const [currentNewsList, setCurrentNewsList] = useState([])
  const [count, setCount] = useState(4)


  useEffect(() => {
    setCurrentNewsList(newsList)
  }, [newsList])

  return (
    <ul className="news-box">
      {
        currentNewsList.map((item) => <NewsSingle key={item._id} {...item} />)
      }
    </ul>
  )
}

export default NewsBox
