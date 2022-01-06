import React, { useState, useEffect } from 'react'
import './NewsBox.css'

import NewsSingle from '../NewsSingle/NewsSingle'

const NewsBox = ({ newsList = [], countNews, onClickRemove, onClickEdit, loggedIn }) => {

  const [currentNewsList, setCurrentNewsList] = useState([])

  // const onClickRemove = (id) => console.log(id)
  // console.log(countNews)

  useEffect(() => {
    const newArr = newsList.slice(0, countNews)

    setCurrentNewsList(newArr)
  }, [newsList, countNews])

  return (
    <ul className="news-box">
      {
        currentNewsList.map((item) =>
          <NewsSingle
            key={item._id}
            {...item}
            onClickRemove={onClickRemove}
            onClickEdit={onClickEdit}
            loggedIn={loggedIn}
          />)
      }
    </ul>
  )
}

export default NewsBox
