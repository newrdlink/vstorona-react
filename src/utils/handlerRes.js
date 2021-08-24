const handlerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // if (res.status === 409) {
  //   return Promise.reject(`Ошибка: ${res.status}, email занят`)
  // }
  // return Promise.reject(res);
  return Promise.reject(`Извините, ошибка: ${res.status}`);
  //  return Promise.reject(res);
};

export default handlerResponse;
