import Koa from 'koa'

import erroHandler from './application/middleware/error-handler'

const app = new Koa()

app.use(erroHandler)

export default app
