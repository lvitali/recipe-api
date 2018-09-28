const fetchRecipes = require('../../../application/interactors/recipeInteractor')
const { searchRecipes } = require('../../../infrastructure/services/recipeService')
const { searchGif } = require('../../../infrastructure/services/gifService')
const validate = require('../../validators/recipeRequestValidator')
const transformRecipes = require('../../transformers/recipesTransformer')

module.exports = (router) => {
  router.get('/recipes',
    validate,
    async (ctx, next) => {
      const data = await fetchRecipes({
        ingredients: ctx.query.i,
        searchRecipes,
        searchGif,
      })

      ctx.body = transformRecipes(data)

      await next()
    })
}
