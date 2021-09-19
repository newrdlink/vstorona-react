const EVENT_KEY = "event";

export const setEvent = (event) => {
  localStorage.setItem(EVENT_KEY, JSON.stringify(event))
}

export const getEvent = () => JSON.parse(localStorage.getItem(EVENT_KEY));

export const removeEvent = () => localStorage.removeItem(EVENT_KEY);