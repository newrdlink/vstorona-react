const ALBUM_KEY = "album";

export const setAlbum = (album) => {
  localStorage.setItem(ALBUM_KEY, JSON.stringify(album))
}

export const getAlbum = () => JSON.parse(localStorage.getItem(ALBUM_KEY));

export const removeAlbum = () => localStorage.removeItem(ALBUM_KEY);