const Router = require('koa-router')
const importDir = require('import-dir')
const compose = require('koa-compose')

module.exports = () => {
  const routes = importDir('./api')
  const router = new Router()

  Object.keys(routes).forEach(route => routes[route](router))

  return compose([router.routes(), router.allowedMethods()])
}
