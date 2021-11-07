import React from 'react'
import './Photo.css'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'

const Foto = ({ currentPath }) => {
  const pageInfo = contentTitle({ currentPath, infoPages })


  return (
    <main className="photo">
      <NavPage
        currentPath={currentPath} />
      <PageTitle
        pageInfo={pageInfo}
      />
    </main>
  )
}

export default Foto
