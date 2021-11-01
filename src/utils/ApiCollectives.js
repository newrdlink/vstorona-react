import React from 'react'
import handlerResponse from './handlerRes'

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headres = headers;
  }

  getCollectives() {
    return fetch(`${this.address}/collectives`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getCollective(id) {
    return fetch(`${this.address}/collectives/${id}`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  createCollective(data, token) {
    // console.log(data)
    return fetch(`${this.address}/collectives`, {
      method: "POST",
      headers: {
        "Contetnt-Type": "multipart/form-data",
        "authorization": `Bearer ${token}`
      },
      body: data
    })
      .then(handlerResponse)
  }

  updateCollective(data, token) {
    // console.log(data)
    return fetch(`${this.address}/collectives`, {
      method: "PATCH",
      headers: {
        "Contetnt-Type": "multipart/form-data",
        "authorization": `Bearer ${token}`
      },
      body: data
    })
      .then(handlerResponse)
  }

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

  deleteCollective(_id, token) {
    return fetch(`${this.address}/collectives`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        _id
      })
    })
      .then(handlerResponse)
  }

  // patchItemDescrHall(oldData, newData, token, type) {
  //   return fetch(`${this.address}/halls/${type}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //     body: JSON.stringify({
  //       oldData, newData
  //     })
  //   })
  //     .then(handlerResponse)
  // }
}

//создаем экземпляр
const api = new Api({
  // address: "http://localhost:3002",
  address: "https://api.vs.didrom.ru",
  headers: {
    "Contetnt-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  },
});

export default api