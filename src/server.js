import Koa from 'koa'
import { config as initEnv } from 'dotenv'
import errorHandler from './application/middleware/errorHandler'
import registerRoutes from './ports/rest'

initEnv()

const app = new Koa()

app.use(errorHandler)

app.use(registerRoutes())

export default app
