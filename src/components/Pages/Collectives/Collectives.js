import React from 'react'
import { Link } from 'react-router-dom'
import './Collectives.css'
import { Switch, Route } from 'react-router'
// import CardsBox from '../../CardsBox/CardsBox'

// import addPath from '../../../helpers/createPathForCollIcons'
// import addImagePath from '../../../helpers/createImagePathForCollIcons'
import NavPage from '../../NavPage/NavPage'
import CollectivePage from '../Collectives/CollectivePage/CollectivePage'
import ProtectedRoute from '../../backend/ProtectedRoute/ProtectedRoute'
import AddCollective from '../../backend/AddCollective/AddCollective'
import EditCollective from '../../backend/EditCollective/EditCollective'

const Collectives = ({ collectivesItems = [], currentPath, loggedIn, updateData, setUpdateData, dataUpdate }) => {
  // console.log(collectivesItems)
  // console.log(collectivesItems)
  return (
    <section className="collectives">
      {loggedIn && currentPath === "/collectives" ?
        <Link className="activity__add-event-button" to="/collectives/add-collective">Добавить коллектив</Link> :
        null
      }
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
        {/* <Route path="/collectives/add-collectives">
          <p>ljfioperh</p>

        </Route> */}
        <ProtectedRoute
          path="/collectives/add-collective"
          component={AddCollective}
          loggedIn={loggedIn}
          dataUpdate={dataUpdate}
        />
        <ProtectedRoute
          path="/collectives/edit-collective"
          component={EditCollective}
          loggedIn={loggedIn}
          dataUpdate={dataUpdate}
        />
        <Route path="/collectives/:id">
          <CollectivePage
            collectivesItems={collectivesItems}
            loggedIn={loggedIn}
            setUpdateData={setUpdateData}
            updateData={updateData}
            dataUpdate={dataUpdate}
          />
        </Route>

      </Switch>

    </section>
  )
}

export default Collectives
