import { fetchRecipes } from '../../../application/interactors/recipeInteractor'
import { searchRecipes } from '../../../infrastructure/services/recipeService'
import { validate } from '../../validators/recipeRequestValidator'

export default (router) => {
  router.get('/recipes',
    validate,
    async (ctx, next) => {
      ctx.body = await fetchRecipes({
        ingredients: ctx.query.i,
        searchRecipes,
      })

      await next()
    })
}
