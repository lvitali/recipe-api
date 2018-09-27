import { ping as pingRecipeService } from '../../infrastructure/services/recipeService'

export default async (ctx, next) => {
  await pingRecipeService()
  await next()
}
