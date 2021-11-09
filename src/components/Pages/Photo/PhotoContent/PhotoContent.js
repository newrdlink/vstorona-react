import React from 'react'
import './PhotoContent.css'
import PhotoItem from '../PhotoItem/PhotoItem'

const PhotoContent = ({ albumList = [], loggedIn, onClickRemove }) => {

  return (
    <ul className="photo-content">
      {
        albumList.map(el => <PhotoItem key={el._id} {...el} loggedIn={loggedIn} onClickRemove={onClickRemove} />)
      }
    </ul>
  )
}

export default PhotoContent
