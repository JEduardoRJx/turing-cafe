const apiCalls = (url) => {
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default apiCalls;