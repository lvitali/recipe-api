const { expect } = require('chai')
const validate = require('../../src/ports/validators/recipeRequestValidator')

const createContext = ingredients => ({
  i: ingredients,
})


describe('recipeRequestValidator', () => {
  it('should accept one argument without comma', (done) => {
    const query = createContext('banana')

    expect(validate(query)).to.be.true
    done()
  })

  it('should accept two arguments', (done) => {
    const query = createContext('banana,cinnamon')

    expect(validate(query)).to.be.true
    done()
  })

  it('should accept up to three arguments', (done) => {
    const query = createContext('banana,cinnamon,sugar')

    expect(validate(query)).to.be.true
    done()
  })

  it('should not accept more than 3 arguments', (done) => {
    const query = createContext('tomato,onion,eggs,pepper')

    expect(() => validate(query)).to.throw('Only three ingredients are supported')
    done()
  })

  it('should throw and error if query is empty', (done) => {
    const query = {}

    expect(() => validate(query)).to.throw('The query string must not be empty')
    done()
  })

  it('should throw and error if parameter i is not present in query', (done) => {
    const query = {
      a: 'apple,organge',
    }

    expect(() => validate(query)).to.throw('The i parameter is required in query string and cannot be null')
    done()
  })

  it('should throw and error when parameter i value does not match the pattern string or string,string', (done) => {
    const queryWithNumber = createContext('apple,1')
    const queryWithCommaAtTheEnd = createContext('apple,')
    const queryWithSpecialChars = createContext('@,?')
    const ingredientsSeparatedByDots = createContext('banana.apple')

    const errorMessage = 'Ingredients must be informed in the following pattern eggs,onion'

    expect(() => validate(queryWithNumber)).to.throw(errorMessage)
    expect(() => validate(queryWithCommaAtTheEnd)).to.throw(errorMessage)
    expect(() => validate(queryWithSpecialChars)).to.throw(errorMessage)
    expect(() => validate(ingredientsSeparatedByDots)).to.throw(errorMessage)

    done()
  })
})
