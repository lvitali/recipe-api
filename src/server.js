const Koa = require('koa')
const path = require('path')
const { config } = require('dotenv')
const serve = require('koa-static')
const errorHandler = require('./application/middleware/errorHandler')
const registerRoutes = require('./ports/rest')

config()

const app = new Koa()

app.use(errorHandler)

app.use(registerRoutes())

app.use(serve(path.join(__dirname, '../public')))

module.exports = app
