import React, { useState } from 'react'
import './AddAntiCorrDoc.css'

import { getToken } from '../../../utils/Token'
import api from '../../../utils/ApiAntiCorrDocument'

const AddAntiCorrDoc = ({ dataUpdate }) => {

  const [docData, setDocData] = useState({})
  const [response, setResponse] = useState("")

  const onChange = (evt) => {
    if (response) {
      console.log("text in response")
      setResponse("")
    }
    setDocData({ ...docData, [evt.target.name]: evt.target.value })
  }

  const onSubmit = async (evt) => {
    const jwt = getToken()
    evt.preventDefault()

    api.createAntiCorrDocument(docData, jwt)
      .then((doc) => {
        // console.log(doc)
        dataUpdate()
        setResponse("Документ добавлен")
      })
      .catch((error) => console.log(error))
  }
  return (
    <section className="add-collective">
      <form
        className="add-event__form"
        method="POST"
        onSubmit={onSubmit}
        name="addAntiCorrDoc">

        <select
          className="add-event__form-item add-event__form-item_type_corr-doc"
          name="type"
          onChange={(evt) => onChange(evt)} >
          <option value="">Выбирете тип документа</option>
          <option>Нормативно-правовые и иные акты в сфере противодействия коррупции</option>
          <option>Методические материалы</option>
          <option>Формы документов для заполнения</option>
          <option>Сведения о доходах, расходах, об имуществе</option>
          <option>Комиссия по противодействию коррупции</option>
          <option>Обратная связь для сообщений о фактах коррупции</option>
          <option>Меры юридической ответственности</option>
          <option>Информационные материалы</option>
        </select>

        <input
          className="add-event__form-item add-event__form-item_type_name-collective"
          type="text"
          name="title"
          onChange={(evt) => onChange(evt)}
          placeholder="Название документа"
        />

        <input
          className="add-event__form-item add-event__form-item_type_name-collective"
          type="text"
          name="link"
          onChange={(evt) => onChange(evt)}
          placeholder="Ссылка на документ"
        />

        <button type="submit" className="add-event__form-button">Добавить документ</button>
        <p className="add-event__response">{response}</p>
      </form>
    </section>
  )
}

export default AddAntiCorrDoc
