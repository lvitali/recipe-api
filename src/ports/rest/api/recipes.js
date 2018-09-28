import fetchRecipes from '../../../application/interactors/recipeInteractor'
import { searchRecipes } from '../../../infrastructure/services/recipeService'
import { searchGif } from '../../../infrastructure/services/gifService'
import validate from '../../validators/recipeRequestValidator'
import transformRecipes from '../../transformers/recipesTransformer'

export default (router) => {
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
