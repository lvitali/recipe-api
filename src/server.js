import Koa from 'koa'

import errorHandler from './application/middleware/errorHandler'
import registerRoutes from './ports/rest'

const app = new Koa()

app.use(errorHandler)

app.use(registerRoutes())

export default app
