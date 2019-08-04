const apiKey = '50c4425dda134b109de67cf8cd142c37';
const baseUrl = 'https://newsapi.org/v2/';

export const getSources = (category, language, country) => {
  const url = `${baseUrl}sources?apiKey=${apiKey}&category=${category}&language=${language}&country=${country}`;
  return fetch(url)
  .then(res => res.json())
  .catch(e => console.log(e));
}
