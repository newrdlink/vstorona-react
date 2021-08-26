import React from 'react'
import './DocBox.css'

import DocBoxTitle from '../DocBoxTitle/DocBoxTitle'
import DocItems from '../DocItems/DocItems'

const DocBox = ({
  arrDoc = [],
  loggedIn,
  onClickAdd,
  onClickEdit,
  onClickRemove,
}) => {
  // console.log(arrDoc)

  return (
    <div className="doc-box">
      <DocBoxTitle
        title={arrDoc.length === 0 ? "" : arrDoc[0].type}
      />
      <DocItems
        docsArr={arrDoc}
        loggedIn={loggedIn}
        onClickAdd={onClickAdd}
        onClickEdit={onClickEdit}
        onClickRemove={onClickRemove}
      />
    </div>
  )
}

export default DocBox
