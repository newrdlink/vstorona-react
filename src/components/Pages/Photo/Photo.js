import React, { useState, useEffect } from 'react'
import './Photo.css'
import { Route, Switch, Link } from 'react-router-dom'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'
import PhotoContent from './PhotoContent/PhotoContent'
import AlbumPage from './AlbumPage/AlbumPage'
import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddPhoto from '../../backend/AddPhoto/AddPhoto'
import api from '../../../utils/ApiPhoto'
import { getToken } from '../../../utils/Token'

const Foto = ({ currentPath, loggedIn }) => {

  const [albums, setAlbums] = useState([])
  const pageInfo = contentTitle({ currentPath, infoPages })

  useEffect(() => {
    api.getAlbums()
      .then((res) => setAlbums(res))
      .catch((error) => console.log(error))
  }, [])

  const onClickRemove = (id) => {
    const jwt = getToken()
    // console.log("delete", id)
    api.deleteAlbum(id, jwt)
      .then((album) => {
        const arr = albums.filter(el => el._id !== id)
        setAlbums(arr)
      })
      .catch((error) => console.log(error))
  }

  const dataUpdate = (album) => setAlbums([...albums, album])
  // console.log(currentPath)
  return (
    <main className="photo">
      <NavPage currentPath={currentPath} />
      {currentPath !== "/media/photo/add-photo" && <PageTitle pageInfo={pageInfo} />}
      {loggedIn && albums.length < 1 ?
        <Link className="activity__add-event-button" to="/media/photo/add-photo">Добавить альбом</Link> :
        null
      }
      <Switch>
        <Route exact path="/media/photo">
          <PhotoContent
            albumList={albums}
            loggedIn={loggedIn}
            onClickRemove={onClickRemove}
          />
        </Route>
        <ProtectedRoute
          path="/media/photo/add-photo"
          component={AddPhoto}
          loggedIn={loggedIn}
          dataUpdate={dataUpdate}
        />
        <Route path="/media/photo/:id">
          <AlbumPage albums={albums} />
        </Route>
      </Switch>
    </main>
  )
}

export default Foto
