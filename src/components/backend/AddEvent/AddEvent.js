import React, { useState } from 'react'
import './AddEvent.css'

import apiAddEvent from '../../../utils/ApiEvents'
import { getToken } from '../../../utils/Token'

const AddEvent = () => {

  const [files, setFiles] = useState([])
  const [eventData, setEventData] = useState({})

  const onChange = (evt) => {
    setEventData({ ...eventData, [evt.target.name]: evt.target.value })
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
      data.append('imageFilesEvent', file, file.name)
    })

    data.append('eventData', JSON.stringify(eventData))

    apiAddEvent.createEvent(data, jwt)
      .then((event) => console.log(event))
      .catch((error) => console.log(error))
  }
  // console.log(files)

  return (
    <section>
      <form
        method="POST"
        onSubmit={onSubmit}
        name="addEvent">
        <input
          type="file"
          multiple={true}
          name="files"
          onChange={handleChangeFiles}
        />
        <input
          type="text"
          name="title"
          onChange={(evt) => onChange(evt)}
        />
        <textarea
          type="text"
          name="subtitle"
          onChange={(evt) => onChange(evt)}
        />
        {/* <input
          type="text"
          name="subtitle"
          onChange={(evt) => onChange(evt)}
        /> */}
        <input
          name="startTime"
          type="datetime-local"
          min="2018-01-01"
          max="2038-12-31"
          onChange={(evt) => onChange(evt)} />

        <button type="submit">Отправить событие</button>
      </form>
    </section>
  )
}

export default AddEvent
