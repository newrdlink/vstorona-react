import React from "react";
import handlerResponse from "./handlerRes";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  createWorker(data, token) {
    // console.log(data)
    return fetch(`${this.address}/workers`, {
      method: "POST",
      headers: {
        "Contetnt-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      },
      body: data,

    }).then(handlerResponse);
  }

  patchWorker(data, token) {
    // console.log(data)
    return fetch(`${this.address}/workers`, {
      method: "PATCH",
      headers: {
        "Contetnt-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      },
      body: data,

    }).then(handlerResponse);
  }

  getWorkers() {
    return fetch(`${this.address}/workers`, {
      method: "GET",
      headers: this.headers,
    }
    ).then(handlerResponse);
  }

  removeWorker(_id, token) {
    return fetch(`${this.address}/workers/${_id}`, {
      method: "DELETE",
      headers: {
        "Contetnt-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      },
    }
    )
  }
}

//создаем экземпляр
const api = new Api({
  address: "http://localhost:3002",
  // address: "https://api.vs.didrom.ru",
  headers: {
    "Contetnt-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  },
});

export default api;
