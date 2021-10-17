import React, { useState } from 'react'
import './Carusel.css'

import CaruselImage from './CaruselImage/CaruselImage'
import BtnChangeImage from './BtnChangeImage/BtnChangeImage'

const Carusel = ({ images, place }) => {

  const [count, setCount] = useState(0)
  const newArrImages = images.slice(1)

  let i = 0
  newArrImages.forEach(element => {
    element.pos = i
    i++
  });

  const changeImageInCarusel = (evt) => {
    // console.log(evt.target.name)
    if (count === 3 && evt.target.name === "inc") {
      return setCount(0)
    }
    if (count === 0 && evt.target.name === "dec") {
      return setCount(3)
    }
    if (evt.target.name === "inc") {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  // console.log(newArrImages)
  const clickOnCircle = (image) => setCount(image)

  // const onClickBtnBack = (evt) => console.log(evt.target)

  return (
    <section className={`carusel-container carusel-container_place_${place}`}>
      <div className={`carusel carusel_place_${place}`}>
        <div
          className={`carusel-images ${count === 1 && "carusel-images_bias_one"} ${count === 2 && "carusel-images_bias_two"} ${count === 3 && "carusel-images_bias_three"}`}>
          {
            newArrImages.map((image) => <CaruselImage image={image} key={image._id || image.link} />)
          }
        </div>
      </div>
      <div className="carusel-control">

        <button className="carusel__btn carusel__btn_type_back"
          type="button" name="dec"
          onClick={(evt) => changeImageInCarusel(evt)}></button>
        <BtnChangeImage listImages={newArrImages} count={count} clickOnCircle={clickOnCircle} />
        <button className="carusel__btn carusel__btn_type_next"
          type="button" name="inc"
          onClick={(evt) => changeImageInCarusel(evt)}></button>

      </div>
    </section>

  )
}

export default Carusel

