const NEWS_KEY = "news";

export const setNews = (news) => {
  localStorage.setItem(NEWS_KEY, JSON.stringify(news))
}

export const getNews = () => JSON.parse(localStorage.getItem(NEWS_KEY));

export const removeNews = () => localStorage.removeItem(NEWS_KEY);