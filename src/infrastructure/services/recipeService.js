const createHttpClient = require('../support/httpClientFactory')

const httpClient = createHttpClient('http://www.recipepuppy.com/api/')

const throwErrorForEmptyResult = (ingredients) => {
  const error = new Error(`No recipes found with ingredients ${ingredients}`)
  error.status = 404
  throw error
}

const checkResponseResults = (response, ingredients) => {
  if (response.data.results.length === 0) {
    throwErrorForEmptyResult(ingredients)
  }

  return response.data.results
}

const searchRecipes = async (ingredients) => {
  const response = await httpClient.get(`?i=${ingredients}`)

  return checkResponseResults(response, ingredients)
}

module.exports = { searchRecipes }
