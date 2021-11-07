import React from 'react'
import './Video.css'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'

const Video = ({ currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })

  return (
    <main className="video">
      <NavPage
        currentPath={currentPath} />
      <PageTitle
        pageInfo={pageInfo}
      />
    </main>
  )
}

export default Video
