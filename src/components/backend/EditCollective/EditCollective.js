import React, { useEffect, useState } from "react"
import './EditCollective.css'

import { getCollective, removeCollective } from "../../../utils/currentCollective"
import { getToken } from '../../../utils/Token'
import apiCollective from '../../../utils/ApiCollectives'

const EditCollective = () => {

  const [editCollective, setEditCollective] = useState({ time: [] })
  const [collectiveData, setCollectiveData] = useState({})
  const [files, setFiles] = useState([])
  const [response, setResponse] = useState("")

  const handleChangeFiles = (evt) => {
    const files = Array.from(evt.target.files)
    setFiles(files)
  }

  const onChange = (evt) => {
    if (response) {
      console.log("text in response")
      setResponse("")
    }
    if (evt.target.name === "time") {
      setEditCollective({ ...editCollective, [evt.target.name]: evt.target.value })
      const str = evt.target.value?.split("    ")
      return setCollectiveData({ ...collectiveData, [evt.target.name]: str })
    }
    if (evt.target.name === "position") {
      setEditCollective({ ...editCollective, [evt.target.name]: evt.target.value })
      const str = evt.target.value?.split("    ")
      return setCollectiveData({ ...collectiveData, [evt.target.name]: str })
    }
    setCollectiveData({ ...collectiveData, [evt.target.name]: evt.target.value })
  }

  const onSubmit = async (evt) => {
    const jwt = getToken()
    evt.preventDefault()

    let data = new FormData();

    if (files.length > 0) {
      files.forEach((file) => data.append('imageFilesCollective', file, file.name))
    }

    data.append('collectiveData', JSON.stringify(collectiveData))

    apiCollective.updateCollective(data, jwt)
      .then((collective) => {
        // console.log(collective)
        setResponse("Коллектив отредактирован")
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    const collective = getCollective()
    if (collective) {
      // console.log(1)
      // console.log(collective)
      setCollectiveData(collective)
      const timeStr = collective.time.join('    ')
      const position = collective.position.join('    ')
      collective.time = timeStr
      collective.position = position

      setEditCollective(collective)

      removeCollective()
    }
    console.log(2)
  }, [])

  return (
    <section className="add-collective">
      <form
        className="add-event__form"
        method="POST"
        onSubmit={onSubmit}
        name="addEvent">

        <label className="add-event__form-label">
          5 фотографий, имена файлов от 1 до 5 (1.png, 2.jpg и т.д.)
          <input
            className="add-event__form-item add-event__form-item_type_files"
            type="file"
            multiple={true}
            name="files"
            onChange={handleChangeFiles}
          />
        </label>
        <div className="add-event__age-container add-event__age-container_type_main">
          <select
            className="add-event__form-item add-event__form-item_type_date"
            name="type"
            onChange={(evt) => onChange(evt)}>
            <option value="">Выбирете тип</option>
            <option value="kids">для детей</option>
            <option value="youngs">для молодых</option>
            <option value="adults">для взрослых</option>
          </select>

          <select
            className="add-event__form-item add-event__form-item_type_subtype"
            name="subtype"
            onChange={(evt) => onChange(evt)}>
            <option value="">Выбирете подтип</option>
            <option value="arts and crafts">Декоративно-прикладное творчество</option>
            <option value="dance">Танцевальные</option>
            <option value="vocal">Вокальные</option>
            <option value="theatrical">Театральные</option>
            <option value="art">Изобразительное искусство</option>
            <option value="photography art">Фотоискусство</option>
          </select>

          <div className="add-event__age-container">
            <p className="add-event__choise-age">Возраст (от/до). Народный/образцовый? (ссылка на документ)</p>
            <input
              name="ageStart" onChange={(evt) => onChange(evt)}
              type="number"
              min="4"
              max="89"
              className="add-event__form-item add-event__form-item_type_age"
              value={collectiveData.ageStart || ''}
            />
            <input
              name="ageEnd" onChange={(evt) => onChange(evt)}
              min="5"
              max="90"
              type="number"
              className="add-event__form-item add-event__form-item_type_age"
              value={collectiveData.ageEnd || ''}
            />
            <input type="text" name="chosen" className="add-event__form-item add-event__form-item_type_chose" onChange={(evt) => onChange(evt)} />
          </div>
        </div>

        <input
          name="time"
          type="text"
          className="add-event__form-item add-event__form-item_type_name-collective"
          placeholder="Время занятий"
          onChange={(evt) => onChange(evt)}
          value={editCollective.time || ''}
        />
        <input
          name="price"
          type="number"
          className="add-event__form-item add-event__form-item_type_name-collective"
          placeholder="Стоимость"
          min="100"
          max="10000"
          onChange={(evt) => onChange(evt)}
          value={collectiveData.price || ''}
        />
        <input type="text" name="supervisor"
          className="add-event__form-item add-event__form-item_type_name-collective"
          onChange={(evt) => onChange(evt)}
          placeholder="ФИО руководителя"
          value={collectiveData.supervisor || ''}
        />
        <input
          name="position"
          type="text"
          className="add-event__form-item add-event__form-item_type_name-collective"
          placeholder="Статус руководителя"
          onChange={(evt) => onChange(evt)}
          value={editCollective.position || ''}
        />
        <input type="tel" name="phone"
          className="add-event__form-item add-event__form-item_type_name-collective"
          onChange={(evt) => onChange(evt)}
          placeholder="Конт. тел. +7 999 000 99 88"
          value={collectiveData.phone || ''}
        />
        <input
          className="add-event__form-item add-event__form-item_type_name-collective"
          type="text"
          name="name"
          onChange={(evt) => onChange(evt)}
          placeholder="Название коллектива"
          value={collectiveData.name || ''}
        />
        <textarea
          className="add-event__form-item add-event__form-item_type_description"
          type="text"
          name="description"
          onChange={(evt) => onChange(evt)}
          placeholder="Описание коллектива"
          value={collectiveData.description || ''}
        />
        <button type="submit" className="add-event__form-button">Редактировать коллектив</button>
        <p className="add-event__response">{response}</p>
      </form>
    </section>
  )
}

export default EditCollective
