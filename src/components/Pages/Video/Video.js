import React, { useEffect, useState } from 'react'
import './Video.css'
import { Switch, Route, Link } from 'react-router-dom'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'
// import VideoFrame from './VideoFrame/VideoFrame'
import VideoContent from './VideoContent/VideoContent'
// import { videoItems } from '../../../config/temp/collectivesItems'
import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddVideo from '../../backend/AddVideo/AddVideo'
import api from '../../../utils/ApiVideo'
import { getToken } from '../../../utils/Token'

import { useTitle } from '../../../helpers/createTitlePage'

const Video = ({ currentPath, loggedIn }) => {

  const [allVideo, setAllVideo] = useState([])
  const pageInfo = contentTitle({ currentPath, infoPages })

  useEffect(() => {
    api.getAllVideo()
      .then((allVideo) => setAllVideo(allVideo))
      .catch((error) => console.log(error))
  }, [])

  const onClickRemove = (id) => {
    const jwt = getToken()
    api.deleteVideo(id, jwt)
      .then(() => {
        const newList = allVideo.filter((el) => el._id !== id)
        setAllVideo(newList)
      })
      .catch((error) => console.log(error))
  }

  const dataUpdate = (video) => setAllVideo([...allVideo, video])

  useTitle("Видео")

  return (
    <main className="video">
      <NavPage currentPath={currentPath} />
      {currentPath !== "/media/video/add-video" && <PageTitle pageInfo={pageInfo} />}
      {loggedIn && allVideo.length < 1 ?
        <Link className="activity__add-event-button" to="/media/video/add-video">Добавить видео</Link> :
        null
      }
      <Switch>
        <Route exact path="/media/video">
          <VideoContent
            videoList={allVideo}
            loggedIn={loggedIn}
            onClickRemove={onClickRemove}
          />
        </Route>
        <ProtectedRoute
          path="/media/video/add-video"
          component={AddVideo}
          loggedIn={loggedIn}
          dataUpdate={dataUpdate}
        />
      </Switch>

    </main>
  )
}

export default Video
