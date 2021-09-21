import React from 'react'
import './Main.css'

import ActivityMain from './ActivityMain/ActivityMain'
import Intro from './Intro/Intro'

const Main = ({ currentPath }) => {
  return (
    <main className="main">
      <Intro />
      <ActivityMain
        currentPath={currentPath}
      />
    </main>
  )
}

export default Main
