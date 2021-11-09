import React, { useRef } from 'react'
import './ImagePopup.css'

const ImagePopup = ({ onClose, images, image, onClickChangeImage }) => {
  const imageContainer = useRef(null);
  // console.log(images)
  return (
    <div
      className={`popup ${image && "popup_opened"} popup_function_open-element`}
      onClick={(evt) => evt.target === evt.currentTarget && onClose()}>
      <figure
        className="popup__image-content"
        ref={imageContainer}
      >
        <button
          type="button"
          className="popup__button-close popup__button-close_place_open-element"
          onClick={onClose}
        ></button>
        <button
          className="popup__button-back"
          type="button"
          name="back"
          onClick={(evt) => onClickChangeImage(image, evt)}></button>
        <button
          className="popup__button-next"
          type="button"
          name="next"
          onClick={(evt) => onClickChangeImage(image, evt)}></button>
        {image && (
          <img
            src={image}
            alt={`Фотография `
              // + card.name
            }
            className="popup__image"
            onLoad={(e) => {
              imageContainer.current.style.width = `${e.target.offsetWidth}px`;
              imageContainer.current.style.height = `${e.target.offsetHeight}px`;
            }}
          />
        )}
        {/* <figcaption className="popup__image-caption">
          {`Фотография ` + card.name}
        </figcaption> */}
      </figure>
    </div>
  )
}

export default ImagePopup