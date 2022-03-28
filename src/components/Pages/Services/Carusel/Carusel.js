import React, { useState, useRef, useEffect } from 'react'
import './Carusel.css'

import CaruselImage from './CaruselImage/CaruselImage'
import BtnChangeImage from './BtnChangeImage/BtnChangeImage'

const Carusel = ({ images = [], place, onClickImage = () => console.log("click isnt do") }) => {

  const [count, setCount] = useState(0)
  const newArrImages = images.slice(1)
  const [initialWidth, setInitialWidth] = useState(0)
  const [sumWidth, setSumWidth] = useState(0)

  const widthImageConteiner = useRef()

  let i = 0
  newArrImages.forEach(element => {
    element.pos = i
    i++
  });

  const changeImageInCarusel = (evt) => {
    if (count === 3 && evt.target.name === "inc") {
      setSumWidth(0)
      return setCount(0)
    }
    if (count === 0 && evt.target.name === "dec") {
      setSumWidth(-initialWidth * 3)
      return setCount(3)
    }
    if (evt.target.name === "inc") {
      setSumWidth(sumWidth + -initialWidth)
      setCount(count + 1)
    } else {
      setSumWidth(sumWidth - -initialWidth)
      setCount(count - 1)
    }
  }

  const clickOnCircle = (image) => setCount(image)


  useEffect(() => {
    const initialWidth = widthImageConteiner.current.offsetWidth
    setInitialWidth(initialWidth)
  }, [])

  useEffect(() => {
    if (count === 0) {
      setSumWidth(-initialWidth * 0)
    }
    if (count === 1) {
      setSumWidth(-initialWidth * 1)
    }
    if (count === 2) {
      setSumWidth(-initialWidth * 2)
    }
    if (count === 3) {
      setSumWidth(-initialWidth * 3)
    }

  }, [count, initialWidth])

  return (
    <section className={`carusel-container carusel-container_place_${place}`}>
      <div className={`carusel carusel_place_${place}`}>
        <div
          className={`carusel-images 
          ${count === 1 && "carusel-images_bias_one"} 
          ${count === 2 && "carusel-images_bias_two"} 
          ${count === 3 && "carusel-images_bias_three"}
          `}
          ref={widthImageConteiner}
          style={{ left: `${sumWidth}px` }}
        >
          {
            newArrImages.map((image) =>
              <CaruselImage
                image={image}
                key={image._id || image.link}
                onClickImage={onClickImage} />)
          }
        </div>
      </div>
      <div className="carusel-control">
        <button className="carusel__btn carusel__btn_type_back"
          type="button"
          name="dec"
          onClick={(evt) => changeImageInCarusel(evt)}
        />
        <BtnChangeImage
          listImages={newArrImages}
          count={count}
          clickOnCircle={clickOnCircle}
        />
        <button
          className="carusel__btn carusel__btn_type_next"
          type="button"
          name="inc"
          onClick={(evt) => changeImageInCarusel(evt)}
        />
      </div>
    </section>

  )
}

export default Carusel

