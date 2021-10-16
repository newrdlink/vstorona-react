import React from 'react'
import handlerResponse from './handlerRes'

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headres = headers;
  }

  getNewsAll() {
    return fetch(`${this.address}/news`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getNews(id) {
    return fetch(`${this.address}/news/${id}`, {
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

  createNews(data, token) {
    // console.log(data)
    return fetch(`${this.address}/news`, {
      method: "POST",
      headers: {
        "Contetnt-Type": "multipart/form-data",
        "authorization": `Bearer ${token}`
      },
      body: data
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

  deleteNews(_id, token) {
    return fetch(`${this.address}/news`, {
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