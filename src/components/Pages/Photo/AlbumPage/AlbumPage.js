import React, { useEffect } from 'react'
import './AlbumPage.css'
import { useParams } from 'react-router-dom'
import { setAlbum } from '../../../../utils/currentAlbum'

import PhotoBox from './PhotoBox/PhotoBox'

const AlbumPage = ({ albums = [] }) => {
  const { id } = useParams()

  const currentAlbum = albums.find(el => el._id === id) || { images: [] }
  setAlbum(currentAlbum)
  const dateAddAlbum = new Date(currentAlbum?.createdAt)
  const dateAlbum = `${dateAddAlbum.getDate()}/${dateAddAlbum.getMonth() + 1}/${dateAddAlbum.getFullYear()}`
  // useEffect(() => {

  // }, [])
  console.log(currentAlbum)

  return (
    <main className="album-page">
      <h1 className="title">{currentAlbum?.title}</h1>
      <p className="video-frame__date video-frame__date_place_photo-page">{dateAlbum}</p>
      <PhotoBox images={currentAlbum?.images} />
      <p>this is page album</p>
    </main>
  )
}

export default AlbumPage
