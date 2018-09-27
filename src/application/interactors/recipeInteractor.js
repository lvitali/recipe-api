const fetchRecipes = async (params) => {
  const { ingredients, searchRecipes } = params

  const recipes = await searchRecipes(ingredients)

  return recipes
}

export { fetchRecipes }
