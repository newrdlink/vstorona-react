const COLLECTIVE_KEY = "collective";

export const setCollective = (collective) => {
  localStorage.setItem(COLLECTIVE_KEY, JSON.stringify(collective))
}

export const getCollective = () => JSON.parse(localStorage.getItem(COLLECTIVE_KEY));

export const removeCollective = () => localStorage.removeItem(COLLECTIVE_KEY);