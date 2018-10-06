const NodeCache = require('node-cache')

const cache = new NodeCache({ stdTTL: 40000 })

const set = (key, data) => cache.set(key, data)

const get = key => cache.get(key)

const hasKey = (key) => {
  const keys = cache.keys()

  if (keys.includes(key)) {
    return true
  }

  return false
}

module.exports = { get, set, hasKey }
