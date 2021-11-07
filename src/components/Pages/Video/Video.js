import React from 'react'
import './Video.css'
import { Switch, Route } from 'react-router-dom'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'
// import VideoFrame from './VideoFrame/VideoFrame'
import VideoContent from './VideoContent/VideoContent'
import { videoItems } from '../../../config/temp/collectivesItems'
import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddVideo from '../../backend/AddVideo/AddVideo'

const Video = ({ currentPath, loggedIn, dataUpdate }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })

  return (
    <main className="video">
      <NavPage currentPath={currentPath} />
      <PageTitle pageInfo={pageInfo} />
      <Switch>
        <Route exact path="/media/video">
          <VideoContent
            videoList={videoItems}
            loggedIn={loggedIn}
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
