module.exports = (key) => {
  if (key in process.env) {
    return process.env[key]
  }

  throw new Error('No value found for key')
}
