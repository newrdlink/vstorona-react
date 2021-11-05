import React from 'react'
import './AccessibleBlock.css'

const AccessibleBlock = ({ block }) => {
  const { list } = block

  return (
    <section className="accessible-block">
      <div className="accessible-block__info">
        <h6 className="accessible-block__title">{block.title}</h6>
        {
          list.length > 0 ? list.map(item => <p className="accessible-block__subtitle" key={item}>{item}</p>) : null
        }
      </div>

      <div className="accessible-block__img-container">
        {/* <img className="accessible-block__image" src={block.image} alt="#" /> */}
      </div>



    </section>
  )
}

export default AccessibleBlock
