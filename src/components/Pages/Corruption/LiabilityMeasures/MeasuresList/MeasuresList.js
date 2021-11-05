import React from "react"
import './MeasuresList.css'
import { MeasuresItem } from '../MeasuresItem/MeasuresItem'

const MeasuresList = ({ items = [] }) => {
  // console.log(items)
  return (
    <ul className="measures-list">
      {
        items.map(item => <MeasuresItem key={item} item={item} className="measures-list__item" />)
      }
    </ul>
  )
}

export default MeasuresList
