import React, { useState } from 'react'
import './AddCollective.css'

import apiAddCollective from '../../../utils/ApiCollectives'
import { getToken } from '../../../utils/Token'

const AddCollective = () => {

  const [files, setFiles] = useState([])
  const [collectiveData, setCollectiveData] = useState({})
  const [response, setResponse] = useState("")
  const [chosen, setChosen] = useState(true)
  // console.log(collectiveData)
  const onChange = (evt) => {
    if (response) {
      console.log("text in response")
      setResponse("")
    }
    if (evt.target.name === "chosen") {
      setCollectiveData({ ...collectiveData, [evt.target.name]: chosen })
      return setChosen(!chosen)
    }
    if (evt.target.name === "time") {
      // const arr = []
      const str = evt.target.value?.split("    ")
      return setCollectiveData({ ...collectiveData, [evt.target.name]: str })
    }
    if (evt.target.name === "position") {
      // const arr = []
      const str = evt.target.value?.split("    ")
      return setCollectiveData({ ...collectiveData, [evt.target.name]: str })
    }
    setCollectiveData({ ...collectiveData, [evt.target.name]: evt.target.value })
  }

  const handleChangeFiles = (evt) => {
    const files = Array.from(evt.target.files)
    // console.log()
    setFiles(files)
  }

  const onSubmit = async (evt) => {
    const jwt = getToken()
    evt.preventDefault()
    let data = new FormData();

    files.forEach((file) => {
      data.append('imageFilesCollective', file, file.name)
    })

    data.append('collectiveData', JSON.stringify(collectiveData))

    apiAddCollective.createCollective(data, jwt)
      .then((event) => {
        console.log(event)
        setResponse("Коллектив добавлен")
        // setFiles([])
        // setEventData({})
      })
      .catch((error) => console.log(error))
  }




  return (
    <section className="add-collective">
      <form
        className="add-event__form"
        method="POST"
        onSubmit={onSubmit}
        name="addEvent">
        {/* <select
          className="add-event__form-item add-event__form-item_type_date"
          defaultValue="default"
          name="type"
          onChange={(evt) => onChange(evt)} >
          <option value="festival">фестиваль или конкурс</option>
          <option value="default">событие</option>
        </select> */}
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
            onChange={(evt) => onChange(evt)} >
            <option value="">Выбирете тип</option>
            <option value="kids">для детей</option>
            <option value="youngs">для молодых</option>
            <option value="adults">для взрослых</option>
          </select>

          <select
            className="add-event__form-item add-event__form-item_type_subtype"
            name="subtype"
            onChange={(evt) => onChange(evt)} >
            <option value="">Выбирете подтип</option>
            <option value="arts and crafts">Декоративно-прикладное творчество</option>
            <option value="dance">Танцевальные</option>
            <option value="vocal">Вокальные</option>
            <option value="theatrical">Театральные</option>
            <option value="art">Изобразительное искусство</option>
            <option value="photography art">Фотоискусство</option>
          </select>

          <input
            className="add-event__form-item add-event__form-item_type_date"
            name="createdAt"
            type="datetime-local"
            min="2018-01-01"
            max="2038-12-31"
            onChange={(evt) => onChange(evt)} />


          <div className="add-event__age-container">
            <p className="add-event__choise-age">Возраст (от/до). Народный/образцовый?</p>
            <input name="ageStart" onChange={(evt) => onChange(evt)}
              type="number"
              min="4"
              max="89"
              className="add-event__form-item add-event__form-item_type_age"
            />
            <input name="ageEnd" onChange={(evt) => onChange(evt)}
              min="5"
              max="90"
              type="number"
              className="add-event__form-item add-event__form-item_type_age"
            />
            <input type="checkbox" name="chosen" onChange={(evt) => onChange(evt)} />
          </div>





        </div>





        <input
          name="time"
          type="text"
          className="add-event__form-item add-event__form-item_type_name-collective"
          placeholder="Время занятий"
          onChange={(evt) => onChange(evt)}
        />

        <input
          name="price"
          type="number"
          className="add-event__form-item add-event__form-item_type_name-collective"
          placeholder="Стоимость"
          min="100"
          max="10000"
          onChange={(evt) => onChange(evt)}
        />





        <input type="text" name="supervisor"
          className="add-event__form-item add-event__form-item_type_name-collective"
          onChange={(evt) => onChange(evt)}
          placeholder="ФИО руководителя" />
        <input
          name="position"
          type="text"
          className="add-event__form-item add-event__form-item_type_name-collective"
          placeholder="Статус руководителя"
          onChange={(evt) => onChange(evt)}
        />
        <input type="tel" name="phone"
          className="add-event__form-item add-event__form-item_type_name-collective"
          onChange={(evt) => onChange(evt)}
          placeholder="Конт. тел. +7 999 000 99 88" />


        <input
          className="add-event__form-item add-event__form-item_type_name-collective"
          type="text"
          name="name"
          onChange={(evt) => onChange(evt)}
          placeholder="Название коллектива"
        />
        {/* <textarea
          className="add-event__form-item add-event__form-item_type_subtitle"
          type="text"
          name="subtitle"
          onChange={(evt) => onChange(evt)}
          placeholder="Подзаголовок"
        /> */}
        <textarea
          className="add-event__form-item add-event__form-item_type_description"
          type="text"
          name="description"
          onChange={(evt) => onChange(evt)}
          placeholder="Описание коллектива"
        />

        <button type="submit" className="add-event__form-button">Добавить коллектив</button>
        <p className="add-event__response">{response}</p>
      </form>
    </section>

  )
}

export default AddCollective
