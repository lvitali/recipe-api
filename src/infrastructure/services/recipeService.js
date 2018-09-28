import createHttpClient from '../support/httpClientFactory'

const httpClient = createHttpClient('http://www.recipepuppy.com/api/')

const throwErrorForEmptyResponse = (ingredients) => {
  const error = new Error(`No recipes found with ingredients ${ingredients}`)
  error.status = 404
  throw error
}

const searchRecipes = async (ingredients) => {
  try {
    const response = await httpClient.get(`?i=${ingredients}`)
    const emptyResponse = response.data.results.length === 0

    if (emptyResponse) {
      throwErrorForEmptyResponse(ingredients)
    }

    return response.data.results
  } catch (err) {
    if (err.status === 404) {
      throw err
    }

    console.log(err)

    const error = new Error('Recipe service is unavailable')
    error.status = 503
    throw error
  }
}

export { searchRecipes }
