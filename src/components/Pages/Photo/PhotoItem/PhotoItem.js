import React from 'react'
import './PhotoItem.css'
import { Link, useHistory } from 'react-router-dom'
import ButtonsBox from '../../../UI/ButtonsBox/ButtonsBox'
import { setAlbum } from '../../../../utils/currentAlbum'

const PhotoItem = ({ loggedIn, ...props }) => {
  const { images, createdAt, title, _id, description } = props
  const history = useHistory()

  const dateAddAlbum = new Date(createdAt)
  const dateAlbum = `${dateAddAlbum.getDate()}/${dateAddAlbum.getMonth() + 1}/${dateAddAlbum.getFullYear()}`
  // const arrWithDescr = description.split("    ")

  return (
    <li className="photo-item">
      <div className="photo-item__content">
        <p className="video-frame__date">{dateAlbum}</p>
        <h3 className="video-frame__title">{title}</h3>
        {
          description.map(el => <p className="video-frame__subtitle" key={el}>{el}</p>)
        }
      </div>
      <div className="photo-item__img-container">
        <Link to={`/media/photo/${_id}`}>
          <img src={images[0] || "#"} alt="#" className="photo-item__image" onClick={() => setAlbum(props)} />
        </Link>
        {loggedIn ?
          <ButtonsBox
            id={_id}
            // onClickRmBtn={onClickRmBtn}
            place="video"
            loggedIn={loggedIn}
            onClickAdd={() => history.push('/media/photo/add-photo')}
            onClickEdit={() => console.log(_id)}
            onClickRemove={() => console.log(_id)}
          /> : null
        }
      </div>
    </li>
  )
}

export default PhotoItem
