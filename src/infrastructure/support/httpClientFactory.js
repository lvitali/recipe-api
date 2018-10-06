const axios = require('axios')

module.exports = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
  })

  instance.interceptors.response.use((response) => {
    if (response.status >= 500) {
      const error = new Error('Service unavailable')
      error.status = 503
      throw error
    }

    return response
  })

  return instance
}
