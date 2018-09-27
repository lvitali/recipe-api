import Router from 'koa-router'
import importDir from 'import-dir'
import compose from 'koa-compose'

export default () => {
  const routes = importDir('./api')
  const router = new Router()

  Object.keys(routes).forEach(route => routes[route](router))

  return compose([router.routes(), router.allowedMethods()])
}
