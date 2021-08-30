import React from 'react'
import './Rent.css'

import NavPage from '../../../NavPage/NavPage'
import PageTitle from '../../../PageTitle/PageTitle'

const Rent = ({ currentPath }) => {
  return (
    <section>
      <NavPage
        currentPath={currentPath}
      />
      <PageTitle />
    </section>
  )
}

export default Rent
