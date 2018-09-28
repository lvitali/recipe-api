const transformRecipes = recipes => recipes.map(recipe => ({
  title: recipe.title.trim(),
  ingredients: recipe.ingredients.split(',').map(i => i.trim()).sort(),
  link: recipe.href,
  gif: recipe.gifUrl,
}))

export default (data) => {
  const { ingredients, recipes } = data

  return {
    keywords: ingredients.split(','),
    recipes: transformRecipes(recipes),
  }
}
