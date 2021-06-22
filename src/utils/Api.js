import React from "react";
import handlerResponse from "./utils";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  createWorker(data) {    
    // console.log("11")
    return fetch(`${this.address}/workers`, {
      method: "POST",
      headers: this.headers,
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

  rmWorker(_id) {
    return fetch(`${this.address}/workers/${_id}`, {
      method: "DELETE",
      headers: this.headers,
    }
    )
  }
}

//создаем экземпляр
const api = new Api({
  address: "http://localhost:5000",
  // address: "http://api.vstorona.didrom.ru",
  headers: {
    "Contetnt-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  },
});
export default api;
