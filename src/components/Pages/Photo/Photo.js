import React, { useState, useEffect } from 'react'
import './Photo.css'
import { Route, Switch } from 'react-router-dom'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'
import PhotoContent from './PhotoContent/PhotoContent'
import { photoItems } from '../../../config/temp/collectivesItems'
import AlbumPage from './AlbumPage/AlbumPage'
// import { removeAlbum } from '../../../utils/currentAlbum'

const Foto = ({ currentPath }) => {

  const [albums, setAlbums] = useState([])
  const pageInfo = contentTitle({ currentPath, infoPages })

  useEffect(() => {
    setAlbums(photoItems)
    // removeAlbum()
  }, [])

  return (
    <main className="photo">
      <NavPage currentPath={currentPath} />
      <PageTitle pageInfo={pageInfo} />
      <Switch>
        <Route exact path="/media/photo">
          <PhotoContent albumList={photoItems} />
        </Route>
        <Route path="/media/photo/:id">
          <AlbumPage albums={albums} />
        </Route>
      </Switch>
    </main>
  )
}

export default Foto
