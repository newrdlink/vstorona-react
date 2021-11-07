import React, { useEffect } from 'react'
import './AlbumPage.css'
import { useParams } from 'react-router-dom'
import { setAlbum } from '../../../../utils/currentAlbum'

const AlbumPage = ({ albums = [] }) => {
  const { id } = useParams()
  // console.log(id)
  const currentAlbum = albums.find(el => el._id === id) || { images: [] }
  setAlbum(currentAlbum)

  useEffect(() => {

  }, [])

  return (
    <main>
      <p>this is page album</p>
    </main>
  )
}

export default AlbumPage
