import React from 'react'
import './CopyRight.css'

import currentYear from '../../../helpers/'

const CopyRight = () => {
  const year = currentYear()

  return (
    <p className="copyright">&copy; 2000-{year} клуб выборгская сторона</p>
  )
}

export default CopyRight
