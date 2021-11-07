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
import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddPhoto from '../../backend/AddPhoto/AddPhoto'
// import { removeAlbum } from '../../../utils/currentAlbum'

const Foto = ({ currentPath, loggedIn }) => {

  const [albums, setAlbums] = useState([])
  const pageInfo = contentTitle({ currentPath, infoPages })

  useEffect(() => {
    setAlbums(photoItems)
    // removeAlbum()
  }, [])
  // console.log(currentPath)
  return (
    <main className="photo">
      <NavPage currentPath={currentPath} />
      {currentPath !== "/media/photo/add-photo" && <PageTitle pageInfo={pageInfo} />}
      <Switch>
        <Route exact path="/media/photo">
          <PhotoContent albumList={photoItems} loggedIn={loggedIn} />
        </Route>
        <ProtectedRoute
          path="/media/photo/add-photo"
          component={AddPhoto}
          loggedIn={loggedIn}
        // dataUpdate={dataUpdate}
        />
        <Route path="/media/photo/:id">
          <AlbumPage albums={albums} />
        </Route>
      </Switch>
    </main>
  )
}

export default Foto
