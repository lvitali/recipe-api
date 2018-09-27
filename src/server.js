import Koa from 'koa'

import erroHandler from './application/middleware/error-handler'
import checkServiceStatus from './application/middleware/serviceStatus'
import registerRoutes from './ports/rest'

const app = new Koa()

app.use(erroHandler)

app.use(checkServiceStatus)

app.use(registerRoutes())

export default app
