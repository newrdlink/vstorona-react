import React from 'react'
import handlerResponse from './handlerRes'

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headres = headers;
  }

  getEvents() {
    return fetch(`${this.address}/activity/events`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  // getHall(type) {
  //   return fetch(`${this.address}/halls/${type}`, {
  //     method: "GET",
  //     headers: this.headres,
  //   })
  //     .then(handlerResponse)
  // }

  createEvents(data, token) {
    return fetch(`${this.address}/halls`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        link: data.link,
        type: data.type,
        title: data.title,
      })
    })
      .then(handlerResponse)
  }

  //   postItemDescrHall(data, token, type) {
  //     return fetch(`${this.address}/halls/${type}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify({
  //         data
  //       })
  //     })
  //       .then(handlerResponse)
  //   }

  //   putMainDescrHall(data, token, type) {
  //     return fetch(`${this.address}/halls/${type}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify({
  //         data
  //       })
  //     })
  //       .then(handlerResponse)
  //   }

  //   deleteItemDescrHall(data, token, type) {
  //     return fetch(`${this.address}/halls/${type}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify({
  //         data
  //       })
  //     })
  //       .then(handlerResponse)
  //   }

  //   patchItemDescrHall(oldData, newData, token, type) {
  //     return fetch(`${this.address}/halls/${type}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify({
  //         oldData, newData
  //       })
  //     })
  //       .then(handlerResponse)
  //   }
}

const api = new Api({
  address: 'http://localhost:3002',
  // address: "https://api.vs.didrom.ru",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api