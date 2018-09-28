const fetchRecipes = async (params) => {
  const { ingredients, searchRecipes, searchGif } = params

  const recipes = await searchRecipes(ingredients)

  const promises = recipes.map(async (recipe) => {
    const gifUrl = await searchGif(recipe.title.trim())
    return { ...recipe, gifUrl }
  })

  const recipesWithGif = await Promise.all(promises)

  return {
    ingredients,
    recipes: recipesWithGif,
  }
}

export default fetchRecipes
