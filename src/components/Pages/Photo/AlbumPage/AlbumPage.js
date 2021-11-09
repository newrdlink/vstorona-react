import React, { useState } from 'react'
import './AlbumPage.css'
import { useParams, useHistory } from 'react-router-dom'
import { setAlbum } from '../../../../utils/currentAlbum'

import PhotoBox from './PhotoBox/PhotoBox'

import ImagePopup from '../../../UI/popups/ImagePopup/ImagePopup'
import SocialLinksShare from '../../../UI/SocialLinksShare/SocialLinksShare'
import ButtonHistoryBack from '../../../UI/buttons/ButtonHistoryBack/ButtonHistoryBack'

const AlbumPage = ({ albums = [] }) => {
  const history = useHistory()
  const { id } = useParams()
  const [image, setImage] = useState('')

  const currentAlbum = albums.find(el => el._id === id) || { images: [] }
  setAlbum(currentAlbum)
  const dateAddAlbum = new Date(currentAlbum?.createdAt)
  const dateAlbum = `${dateAddAlbum.getDate()}/${dateAddAlbum.getMonth() + 1}/${dateAddAlbum.getFullYear()}`

  const { images = [], link = "" } = currentAlbum

  const onClickChangeImage = (image, evt) => {
    const index = images.indexOf(image)

    if (evt.target.name === "back" && index !== 0) {
      return setImage(images[index - 1])
    }
    if (evt.target.name === "next" && index !== images.length - 1) {
      return setImage(images[index + 1])
    }
    index === 0 ? setImage(images[`${images.length - 1}`]) : setImage(images[0])
  }

  return (
    <main className="album-page">
      <h1 className="title">{currentAlbum?.title}</h1>
      <p className="video-frame__date video-frame__date_place_photo-page">{dateAlbum}</p>
      <PhotoBox
        images={currentAlbum?.images}
        onClickImage={(image) => setImage(image)}
      />
      <div className="event-page__links">
        <ButtonHistoryBack name="Вернуться к альбомам" place="album" onClick={() => history.push('/media/photo')} />
        <a href={link || "https://ya.ru"} target="_blank" rel="noreferrer" className="album-page__link">альбом в контакте</a>
        <SocialLinksShare />
      </div>
      <ImagePopup
        onClose={() => setImage('')}
        images={images}
        image={image}
        onClickChangeImage={onClickChangeImage}
      />
    </main>
  )
}

export default AlbumPage
