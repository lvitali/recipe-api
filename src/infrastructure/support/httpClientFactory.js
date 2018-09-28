const axios = require('axios')

module.exports = baseUrl => (
  axios.create({
    baseURL: baseUrl,
    timeout: 2000,
  })
)
