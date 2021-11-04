import React from 'react'
import { useHistory } from 'react-router-dom'
import './DocItemCorr.css'

import ButtonsBox from '../../../UI/ButtonsBox/ButtonsBox'

const DocItemCorr = ({ item, loggedIn, removeDoc }) => {
  const history = useHistory()
  //console.log(item)
  const { link, title, _id } = item

  return (
    <li className="doc-item">
      <a href={link} target="_blank" rel="noreferrer" className="doc-item__link">{title}</a>
      {loggedIn ?
        <ButtonsBox
          id={_id}
          // onClickRmBtn={onClickRmBtn}
          place="document"
          loggedIn={loggedIn}
          onClickAdd={() => history.push('/anti-corruption/add-anticorrdoc')}
          onClickEdit={() => console.log(_id)}
          onClickRemove={() => removeDoc(_id)}
        /> : null
      }
    </li>
  )
}

export default DocItemCorr
