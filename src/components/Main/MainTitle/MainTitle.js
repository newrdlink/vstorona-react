import React from 'react'
import './MainTitle.css'

const MainTitle = ({ title, place }) => <h3 className={`main-title main-title_place_${place}`}>{title}</h3>

export default MainTitle