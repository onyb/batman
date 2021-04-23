const axios = require('axios')

const HOST = 'api.coingecko.com/api/v3'
const PROTOCOL = 'https'

const client = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default client
