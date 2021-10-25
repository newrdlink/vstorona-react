import React from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router'
import './SubtypesCollectives.css'
import CardsBox from '../../../CardsBox/CardsBox'

import CollectivePage from '../CollectivePage/CollectivePage'

const SubtypesCollectives = ({ arrayCards = [], onClickHandler }) => {
  const { url } = useRouteMatch()

  const { subTypeCollective } = useParams()
  console.log(subTypeCollective)
  console.log(url)

  return (
    <>
      <Switch>
        <Route exact path={url}>
          <CardsBox
            arrayCards={arrayCards}
            onClickHandler={onClickHandler}
          />
        </Route>
        <Route path={`url/:id`}>
          <CollectivePage

          />
        </Route>

      </Switch>

      <p>we are here</p>
    </>
  )
}

export default SubtypesCollectives
