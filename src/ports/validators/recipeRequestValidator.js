const checkQsParameters = (query) => {
  if (Object.keys(query).length === 0) {
    throw new Error('The query string must not be empty')
  }

  if (!('i' in query) || query.i === '') {
    throw new Error('The i parameter is required in query string and cannot be null')
  }
}

const checkQsPattern = (query) => {
  const pattern = /^([A-z]+,?)*[A-z]$/g

  const isValid = pattern.test(query.i)

  if (!isValid) {
    throw new Error('Ingredients must be informed in the following pattern eggs,onion')
  }
}

const validateParametersSize = (query) => {
  const valuesCount = query.i.split(',').length

  if (valuesCount > 3) {
    throw new Error('Only three ingredients are supported')
  }
}

const validate = (query) => {
  checkQsParameters(query)
  checkQsPattern(query)
  validateParametersSize(query)

  return true
}

module.exports = validate
