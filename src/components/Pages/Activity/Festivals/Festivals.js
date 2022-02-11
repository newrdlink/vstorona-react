import React, { useState, useEffect } from 'react'
import './Festivals.css'
import { useHistory } from 'react-router-dom'

import PageTitleShadow from '../../../PageTitleShadow/PageTitleShadow'
import EventsBox from '../Events/EventsBox/EventsBox'

import apiEvents from '../../../../utils/ApiEvents'
import { getToken } from '../../../../utils/Token'
import { setEvent } from '../../../../utils/currentEvent'


const Festivals = ({ pageInfo, loggedIn, setEditingEvent }) => {
  const [eventsList, setEventsList] = useState([])
  const history = useHistory()

  useEffect(() => {
    apiEvents.getEvents()
      .then((events) => {
        const listFestivalEvents = events.filter((el) => el.type === "festival")
        const sortArrEvents = listFestivalEvents.sort((a, b) => {
          const dateA = + (new Date(a.startTime))
          const dateB = + (new Date(b.startTime))
          if (dateA > dateB) {
            return -1
          }
          if (dateA < dateB) {
            return 1
          } return null
        })
        setEventsList(sortArrEvents)
      })
      .catch((error) => console.log(error))
  }, [])

  const onClickRemoveEvent = (_id) => {
    const jwt = getToken()

    apiEvents.deleteEvent(_id, jwt)
      .then((event) => {
        const eventsListWithoutDeletedCard = eventsList.filter((item) => item._id !== event._id)
        setEventsList(eventsListWithoutDeletedCard)
        // console.log(event)
      })
      .catch((error) => console.log(error))
  }

  const onClickEditEvent = (_id) => {
    const editingEvent = eventsList.filter(el => el._id === _id)
    setEditingEvent(editingEvent[0])
    setEvent(editingEvent[0])
    history.push('/activity/edit-event')
  }

  return (
    <main className="festivals">
      <PageTitleShadow
        pageInfo={pageInfo}
        startPosition={-500}
        place="festivals"
      />
      <EventsBox
        eventsList={eventsList}
        loggedIn={loggedIn}
        onClickRemove={onClickRemoveEvent}
        onClickEdit={onClickEditEvent}
      />
    </main>
  )
}

export default Festivals
