import React from 'react'
import './PhotoContent.css'
import PhotoItem from '../PhotoItem/PhotoItem'

const PhotoContent = ({ albumList = [], loggedIn }) => {

  return (
    <ul className="photo-content">
      {
        albumList.map(el => <PhotoItem key={el._id} {...el} loggedIn={loggedIn} />)
      }
    </ul>
  )
}

export default PhotoContent
