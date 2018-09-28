module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 400
    ctx.body = {
      error: err.message,
    }
  }
}
