const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../src/server')

chai.use(chaiHttp)

const app = server.listen(3001)

after(() => app.close())

describe('GET /recipes', () => {
  it('must list recipes when ingredients are present in querystring', (done) => {
    chai.request(app)
      .get('/recipes?i=onion,tomato,eggs')
      .end((err, response) => {
        chai.expect(response).to.have.status(200)
        chai.expect(response).to.be.json

        done()
      })
  })

  it('must throw an error the ingredients are invalid characters', (done) => {
    chai.request(app)
      .get('/recipes?i=$,!,@')
      .end((err, response) => {
        chai.expect(response).to.have.status(400)
        chai.expect(response).to.be.json

        done()
      })
  })

  it('must throw an error when no querystring is present', (done) => {
    chai.request(app)
      .get('/recipes')
      .end((err, response) => {
        chai.expect(response).to.have.status(400)
        chai.expect(response).to.be.json
        chai.expect(response.text).to.be.equals('{"error":"The query string must not be empty"}')

        done()
      })
  })

  it('must throw an error when querystring parameter i is empty', (done) => {
    chai.request(app)
      .get('/recipes?i=')
      .end((err, response) => {
        chai.expect(response).to.have.status(400)
        chai.expect(response).to.be.json
        chai.expect(response.text).to.be.equals('{"error":"The i parameter is required in query string and cannot be null"}')

        done()
      })
  })

  it('must throw an error when more than 3 ingredients are informed', (done) => {
    chai.request(app)
      .get('/recipes?i=eggs,bacon,onion,garlic')
      .end((err, response) => {
        chai.expect(response).to.have.status(400)
        chai.expect(response).to.be.json
        chai.expect(response.text).to.be.equals('{"error":"Only three ingredients are supported"}')

        done()
      })
  })
})
