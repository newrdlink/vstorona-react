import React from 'react'
import './ActivityMain.css'

import MainTitle from '../MainTitle/MainTitle'
import PageTitleShadow from '../../PageTitleShadow/PageTitleShadow'

import CardsBox from '../../CardsBox/CardsBox'
import { activityMainItems } from '../../../config/activityMainItems'

const ActivityMain = ({ currentPath }) => {

  return (
    <section className="activity-main">
      <PageTitleShadow
        pageInfo={{ name: "наша деятельность" }}
        place="main"
      />
      <MainTitle title="наша деятельность" />
      <div className="activity-main__scroll-container">
        <CardsBox
          arrayCards={activityMainItems}
          currentPath={currentPath}
          place="activity-main"
        />
      </div>
      {/* <CardsBox
        arrayCards={activityMainItems}
        currentPath={currentPath}
        place="activity-main"
      /> */}


    </section>
  )
}

export default ActivityMain
