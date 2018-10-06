const createHttpClient = require('../support/httpClientFactory')
const env = require('../support/env')

const httpClient = createHttpClient('https://api.giphy.com/v1')

const searchGif = async (title) => {
  const apiKey = env('GIPHY_API_KEY')
  const endpoint = `/gifs/search?api_key=${apiKey}&q=${title}&limit=1&lang=en`
  const response = await httpClient.get(endpoint)

  if (response.data.data.length === 0) {
    return 'No gif found'
  }

  return response.data.data.pop().url
}

module.exports = { searchGif }
