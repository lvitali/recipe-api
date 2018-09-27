import Koa from 'koa'

import erroHandler from './application/middleware/error-handler'
import checkServiceStatus from './application/middleware/serviceStatus'

const app = new Koa()

app.use(erroHandler)

app.use(checkServiceStatus)

export default app
