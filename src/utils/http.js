const axios = require('axios')

const HOST = 'api.coingecko.com/api/v3'
const PROTOCOL = 'https'

const client = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  mode: 'no-cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'same-origin',
})

export default client
