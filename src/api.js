import axios from 'axios'

const service = axios.create({
  baseURL: '/',
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  getRadios() {
    return service
      .get('https://teclead.de/recruiting/radios')
      .then(res => res.data)
      .catch(errHandler)
  }
}