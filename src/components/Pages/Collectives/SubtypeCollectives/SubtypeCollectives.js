import React from 'react'
import { Switch, Route, useParams } from 'react-router'
import './SubtypeCollectives.css'

import CardsBox from '../../../CardsBox/CardsBox'
import getType from '../../../../helpers/getTypeCollectiveFromTypeRus'
import { setCollective } from '../../../../utils/currentCollective'

const SubtypeCollectives = ({ collectivesItems = [], currentPath }) => {
  // console.log(collectivesItems)
  const { type } = useParams()
  // console.log(1, type)
  const typeCollectiveItems = collectivesItems.filter((item) => item.type === getType(type))
  // let i = 1
  // typeCollectiveItems.forEach((item) => {
  //   item._id = i
  //   i++
  // })
  // console.log(typeCollectiveItems)
  // console.log(type)
  // console.log(1, `${type}/${'123'}`)

  const onClickOnCardHandler = (id) => {
    // console.log(1, id)
    const collective = collectivesItems.find((el) => el._id === id)
    // console.log(collective)
    setCollective(collective)
  }

  return (
    <Switch>
      <Route exact path={`/collectives/${type}`}>
        <CardsBox
          onClickHandler={onClickOnCardHandler}
          arrayCards={typeCollectiveItems}
          currentPath={currentPath}
        // currentPlace="collectives"
        />
      </Route>
      <Route path={`/collectives/${type}/:id`}>
        <p>hfgioweghiofgrea</p>
      </Route>

    </Switch>

  )
}

export default SubtypeCollectives
