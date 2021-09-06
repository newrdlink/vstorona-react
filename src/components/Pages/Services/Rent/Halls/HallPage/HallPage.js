import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './HallPage.css'

import Carusel from '../../../Carusel/Carusel'
import Composition from '../../../Composition/Composition'

import HallDescription from '../../../HallDescription/HallDescription'
import prepareObjectForQueryPut from '../../../../../../helpers/prepareObjForPutItemToHall'
import prepareObjectForQueryRemove from '../../../../../../helpers/prepareObjForRemoveItemToHall'

import AddItemDescrHall from '../../../../../UI/popups/AddItemDescrHall/AddItemDescrHall'
import EditItemDescrHall from '../../../../../UI/popups/EditItemDescrHall/EditItemDescrHall'

import api from '../../../../../../utils/ApiHalls'
import { getToken } from '../../../../../../utils/Token'

const HallPage = ({ hallItems, loggedIn }) => {

  const [isPopupAddItemDescrHallOpen, setIsPopupAddItemDescrHallOpen] = useState('')
  const [isPopupEditItemDescrHallOpen, setIsPopupEditItemDescrHallOpen] = useState('')

  const { type } = useParams()
  const currentHall = hallItems.find(h => h.type === type) ||
    { description: "templete for start", images: [{ link: "temp" }], linkToPrice: { link: "temp" } }

  const { images } = currentHall
  const { descriptionServices } = currentHall

  const onClickAddItemDescription = (itemStr) => {
    setIsPopupAddItemDescrHallOpen(itemStr)
  }

  const onClickEditItemDescription = (itemStr) => {
    setIsPopupEditItemDescrHallOpen(itemStr)
  }

  const onSubmitPutDescrHall = (str) => {
    const jwt = getToken()
    const data = prepareObjectForQueryPut(currentHall, isPopupAddItemDescrHallOpen, str)
    // console.log(data)
    api.postItemDescrHall(data, jwt, type)
      .then((description) => console.log(description))
      .catch((error) => console.log(error))
  }

  const removeItemDescrHall = (str) => {
    const jwt = getToken()
    const data = prepareObjectForQueryRemove(currentHall, str)
    // console.log(data)
    api.deleteItemDescrHall(data, jwt, type)
      .then((description) => console.log(description))
      .catch((error) => console.log(error))
  }

  const onSubmitEditDescrHall = (newStr) => {
    const oldValue = prepareObjectForQueryRemove(currentHall, isPopupEditItemDescrHallOpen)
    const keyObj = Object.keys(oldValue)[0]
    let newValue = {}
    newValue[keyObj] = newStr
    const jwt = getToken()

    api.patchItemDescrHall(oldValue, newValue, jwt, type)
      .then((description) => console.log(description))
      .catch((error) => console.log(error))
    // console.log(1, oldValue)
    // console.log(2, newValue)
  }

  return (

    <section className="hall">
      <div className="hall__image-container">
        <img className="hall__image" src={currentHall.images[0].link} alt={currentHall.images[0].name} />
      </div>
      <p className="hall__title">{currentHall.description.title}</p>
      <div className="hall__about-items">
        <button type="button" className="hall__order-btn">забронировать</button>
        <div className="hall__about-item">
          <p className="hall__about-item-title">вместимость :</p>
          <p className="hall__about-item-roominess">до {currentHall.description.roominess} человек</p>
        </div>
        <div className="hall__about-item">
          <p className="hall__about-item-title">общая площадь :</p>
          <p className="hall__about-item-roominess">{currentHall.description.square} кв. м.</p>
        </div>
        <div className="hall__about-item">
          <p className="hall__about-item-title">стоимость :</p>
          <p className="hall__about-item-roominess">1 час &mdash; {currentHall.price} &#8381;</p>
        </div>
      </div>
      <div className="hall__description">
        <HallDescription
          title="описание"
          arrDescription={descriptionServices}
          loggedIn={loggedIn}
          onClickAdd={onClickAddItemDescription}
          onClickRemove={removeItemDescrHall}
          onClickEdit={onClickEditItemDescription}
        />
        <Carusel images={images} />
      </div>
      <Composition
        currentHall={currentHall}
        loggedIn={loggedIn}
        onClickAdd={onClickAddItemDescription}
        onClickRemove={removeItemDescrHall}
        onClickEdit={onClickEditItemDescription}
      />
      <p className="hall__ps">{currentHall.ps}</p>
      <a href={currentHall.linkToPrice.link} target="_blank"
        rel="noreferrer"
        className="hall__link-to-price">{currentHall.linkToPrice.name}</a>
      <AddItemDescrHall
        isOpen={isPopupAddItemDescrHallOpen}
        title="Добавить описание"
        submitBtnName="Добавить"
        onSubmitAddDescrHall={onSubmitPutDescrHall}
        onClose={() => setIsPopupAddItemDescrHallOpen('')}
      />
      <EditItemDescrHall
        isOpen={isPopupEditItemDescrHallOpen}
        title="Изменить описание"
        submitBtnName="Изменить"
        onSubmitEditDescrHall={onSubmitEditDescrHall}
        onClose={() => setIsPopupEditItemDescrHallOpen('')}
      />
    </section>

  )
}

export default HallPage

