import React from 'react'
import './LiabilityMeasures.css'
import { measuresInfo } from '../../../../constants/measuresInfo'
import MeasuresList from './MeasuresList/MeasuresList'

const LiabilityMeasures = () => {
  const { list1, list2, list3, list4, list5 } = measuresInfo

  return (
    <section className="measures">
      <h6 className="measures__title">{measuresInfo.title}</h6>
      <p className="measures__subtitle">{measuresInfo.type[0]}</p>
      <p className="measures__subtitle">{measuresInfo.subtype[0]}</p>
      <MeasuresList items={list1} />
      <p className="measures__subtitle">{measuresInfo.subtype[1]}</p>
      <MeasuresList items={list2} />
      <p className="measures__subtitle">{measuresInfo.type[1]}</p>
      <MeasuresList items={list3} />
      <p className="measures__subtitle">{measuresInfo.subtype[2]}</p>
      <MeasuresList items={list4} />
      <h6 className="measures__title">{measuresInfo.subtitle}</h6>
      <p className="measures__subtitle">{measuresInfo.subtype[3]}</p>
      <MeasuresList items={list5} />
    </section>
  )
}

export default LiabilityMeasures
