import Koa from 'koa'

import errorHandler from './application/middleware/errorHandler'
import checkServiceStatus from './application/middleware/serviceStatus'
import registerRoutes from './ports/rest'

const app = new Koa()

app.use(errorHandler)

app.use(checkServiceStatus)

app.use(registerRoutes())

export default app
