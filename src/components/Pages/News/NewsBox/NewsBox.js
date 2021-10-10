import React, { useState, useEffect } from 'react'
import './NewsBox.css'

import NewsSingle from '../NewsSingle/NewsSingle'

const NewsBox = ({ newsList = [], countNews }) => {

  const [currentNewsList, setCurrentNewsList] = useState([])



  useEffect(() => {
    const newArr = newsList.slice(0, countNews)
    // if (newsList.length < 1) {
    //   console.log("news are 0")
    //   return
    // }
    // console.log("news are more than 1")
    setCurrentNewsList(newArr)
  }, [newsList, countNews])

  return (
    <ul className="news-box">
      {
        currentNewsList.map((item) => <NewsSingle key={item._id} {...item} />)
      }
    </ul>
  )
}

export default NewsBox
