import axios from 'axios'

export default baseUrl => (
  axios.create({
    baseURL: baseUrl,
    timeout: 2000
  })
)
