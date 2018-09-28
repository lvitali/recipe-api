import Koa from 'koa'
import path from 'path'
import { config as initEnv } from 'dotenv'
import serve from 'koa-static'
import errorHandler from './application/middleware/errorHandler'
import registerRoutes from './ports/rest'

initEnv()

const app = new Koa()

app.use(errorHandler)

app.use(registerRoutes())

app.use(serve(path.join(__dirname, '../public')))

export default app
