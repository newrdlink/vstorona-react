import React, { useEffect } from 'react'
import './Dance.css'

import apiDance from '../../../../utils/ApiDance'

const Dance = () => {
  // console.log(1)
  useEffect(() => {
    apiDance.getDance()
      .then((dance) => console.log(dance))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section>

    </section>
  )
}

export default Dance
