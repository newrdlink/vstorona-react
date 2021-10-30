import React from 'react'
import './Collectives.css'
import { Switch, Route } from 'react-router'
// import CardsBox from '../../CardsBox/CardsBox'

// import addPath from '../../../helpers/createPathForCollIcons'
// import addImagePath from '../../../helpers/createImagePathForCollIcons'
import NavPage from '../../NavPage/NavPage'
import CollectivePage from '../Collectives/CollectivePage/CollectivePage'

const Collectives = ({ collectivesItems = [], currentPath }) => {
  // console.log(collectivesItems)
  // console.log(collectivesItems)
  return (
    <section className="collectives">
      <NavPage
        currentPath={currentPath}
      />

      <Switch>

        <Route exact path="/collectives">
          <p>Ссылка на спсиок коллективов вверху</p>
          {/* <CardsBox
            arrayCards={typesCollectives}
            currentPath={currentPath}
            place="collectives"
          /> */}
        </Route>
        <Route path="/collectives/:id">
          <CollectivePage collectivesItems={collectivesItems} />
        </Route>

      </Switch>

    </section>
  )
}

export default Collectives
