const createHttpClient = require('../support/httpClientFactory')
const env = require('../support/env')

const httpClient = createHttpClient('https://api.giphy.com/v1')

const searchGif = async (title) => {
  try {
    const apiKey = env('GIPHY_API_KEY')
    const endpoint = `/gifs/search?api_key=${apiKey}&q=${title}&limit=1&lang=en`
    const response = await httpClient.get(endpoint)

    return response.data.data.pop().url
  } catch (err) {
    const error = new Error('Gif service unavailable')
    error.status = 503
    throw error
  }
}

module.exports = { searchGif }
