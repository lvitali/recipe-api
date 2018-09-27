import compose from 'koa-compose'
import { ping as pingRecipeService } from '../../infrastructure/services/recipeService'

export default async () => await pingRecipeService()
