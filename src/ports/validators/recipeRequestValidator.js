const checkQsParameters = (request) => {
  if (!request.query) {
    throw new Error('The query string must not be empty')
  }

  if (!('i' in request.query) || request.query === null) {
    throw new Error('The i parameter is required in query string e cannot be null')
  }
}

const checkQsPattern = (request) => {
  const pattern = /([A-z]+,){1}/g

  const isValid = pattern.test(request.query.i)

  if (!isValid) {
    throw new Error('Ingredients must be informed in the following pattern eggs,onion')
  }
}

const validateParametersSize = (value) => {
  const valuesCount = value.split(',').length

  if (valuesCount > 3) {
    throw new Error('No máximo 3 ingredientes devem ser informados')
  }
}

const validate = async (ctx, next) => {
  checkQsParameters(ctx)
  checkQsPattern(ctx)
  validateParametersSize(ctx.query.i)

  await next()
}

export default validate
