const cacheService = require('../../infrastructure/services/cacheService')

const fetchRecipes = async (params) => {
  const { ingredients, searchRecipes, searchGif } = params

  if (cacheService.hasKey(ingredients)) {
    return cacheService.get(ingredients)
  }

  const recipes = await searchRecipes(ingredients)

  const getGifForRecipes = recipes.map(async (recipe) => {
    const gifUrl = await searchGif(recipe.title.trim())
    return { ...recipe, gifUrl }
  })

  const recipesWithGifs = await Promise.all(getGifForRecipes)

  const data = {
    ingredients,
    recipes: recipesWithGifs,
  }

  cacheService.set(ingredients, data)

  return data
}

module.exports = fetchRecipes
