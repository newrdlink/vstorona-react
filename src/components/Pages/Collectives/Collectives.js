import React from 'react'
import './Collectives.css'
import { Switch, Route } from 'react-router'
import CardsBox from '../../CardsBox/CardsBox'

import addPath from '../../../helpers/createPathForCollIcons'
import addImagePath from '../../../helpers/createImagePathForCollIcons'
import NavPage from '../../NavPage/NavPage'

import SubtypeCollectives from './SubtypeCollectives/SubtypeCollectives'

const Collectives = ({ collectivesItems = [], currentPath }) => {
  // console.log(collectivesItems)
  let i = 1
  const typesCollectives = collectivesItems.reduce((arr, item) => {
    const typeCollective = item.type

    // console.log(typeCollective)
    if (!arr.find((item) => item.type === typeCollective)) {
      const obj = {}
      obj["type"] = item.type
      obj["id"] = i
      obj["name"] = item.type
      obj["path"] = addPath(item.type)
      obj["image"] = addImagePath(item.type)

      obj["pathName"] = addPath(item.type)

      i++
      arr.push(obj)
    }
    return arr
  }, [])



  // console.log(typesCollectives)
  return (
    <section className="collectives">
      <NavPage
        currentPath={currentPath}
      />

      <Switch>

        <Route exact path="/collectives">
          <CardsBox
            arrayCards={typesCollectives}
            currentPath={currentPath}
            place="collectives"
          />
        </Route>

        <Route path="/collectives/:type">
          <SubtypeCollectives
            currentPath={currentPath}
            collectivesItems={collectivesItems}
          />
        </Route>

      </Switch>

    </section>
  )
}

export default Collectives
