import React from 'react'
import './BlocksMenuColl.css'

import BlockMenuColl from '../BlockMenuColl/BlockMenuColl'

const BlocksMenuColl = ({ collectivesItems = [] }) => {

  return (
    <div className="block-collectives">
      <BlockMenuColl />
    </div>
  )
}

export default BlocksMenuColl
