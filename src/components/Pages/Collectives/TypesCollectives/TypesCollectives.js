import React from 'react'
import { Switch, Route, useParams } from 'react-router'
import './TypesCollectives.css'

import CardsBox from '../../../CardsBox/CardsBox'
import getType from '../../../../helpers/getTypeCollectiveFromTypeRus'
import { setCollective } from '../../../../utils/currentCollective'

import CollectivePage from '../CollectivePage/CollectivePage'
import SubtypesCollectives from '../SubtypesCollectives/SubtypesCollectives'

import createPathForSubtype from '../../../../helpers/createPathForSubtypesCollective'

const TypesCollectives = ({ collectivesItems = [], currentPath }) => {
  // console.log(collectivesItems)
  const { type } = useParams()
  // console.log(1, type)
  const typeCollectiveItems = collectivesItems.filter((item) => item.type === getType(type))
  const subTypeCollective = typeCollectiveItems[0]?.subtype
  const subtypesCollectivesItems = typeCollectiveItems.filter((item) => item.subtype === subTypeCollective)

  const allSubtypesTypeCollectives = typeCollectiveItems.reduce((arr, item) => {
    if (!arr.find((el) => el.subtype === item.subtype)) {
      // console.log(el.subtype)
      const obj = {}
      obj["subtype"] = item.subtype
      obj["name"] = item.subtype
      obj["image"] = "https://api.vs.didrom.ru/collectives/folk/1.jpg"
      obj["path"] = createPathForSubtype(item.subtype)
      arr.push(obj)
    }
    return arr
  }, [])
  // console.log(allSubtypesTypeCollectives)
  // console.log(1, typeCollectiveItems)



  const subtypePath = createPathForSubtype(subTypeCollective)
  // console.log(createPathForSubtype(subTypeCollective))
  // console.log(subtypesCollectivesItems)
  // console.log(currentPath)

  const onClickOnCardHandler = (id) => {
    console.log(1, id)
    // if (currentPath.endsWith('kids')) {
    //   console.log('да')
    //   return
    // }
    // if (currentPath.endsWith('crafts')) {
    //   console.log('да')
    //   return
    // }
    const collective = collectivesItems.find((el) => el._id === id)
    // console.log(collective)
    setCollective(collective)
  }

  // console.log(2, subtypesCollectivesItems)

  return (
    <Switch>
      <Route exact path={`/collectives/${type}`}>
        <CardsBox
          // onClickHandler={onClickOnCardHandler}
          arrayCards={subtypesCollectivesItems[0].type === "Народные и образцовые" ?
            subtypesCollectivesItems : allSubtypesTypeCollectives}
          currentPath={currentPath}
        // subtypePath={subtypePath}
        // currentPlace="collectives"
        />
      </Route>

      <Route path={`/collectives/folk/:id`}>
        <CollectivePage
        // collectivesItems={collectivesItems}
        // currentPath={currentPath}
        />
        <p>fhnerkws</p>
      </Route>

      <Route path={`/collectives/${type}/:subTypeCollective`}>
        <p>page collective 2</p>
        <SubtypesCollectives
          currentPath={currentPath}
          arrayCards={subtypesCollectivesItems}
          onClickHandler={onClickOnCardHandler}
        />
        {/* <CollectivePage
          collectivesItems={collectivesItems}
          currentPath={currentPath}
        /> */}
      </Route>

    </Switch>

  )
}

export default TypesCollectives
