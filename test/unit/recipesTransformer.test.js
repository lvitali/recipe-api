const chai = require('chai')
const transform = require('../../src/ports/transformers/recipesTransformer')

const data = {
  ingredients: 'eggs,tomato',
  recipes: [
    {
      title: 'Hash and Eggs',
      ingredients: 'tomato, hot sauce',
      link: 'http://www.nibbledish.com/people/Endymion/recipes/hash-and-eggs',
      gifUrl: 'https://xpto.com/41i2j34oo2.jpg',
    },
    {
      title: 'Speedy Egg & Cheese Stack',
      ingredients: 'cheese,tomato',
      link: 'http://www.kraftfoods.com/kf/recipes/speedy-egg-cheese-stack-91423.aspx',
      gifUrl: 'https://xpto.com/h432jkh4k23.jpg',
    },
  ],
}

describe('recipesTransformer', () => {
  it('should transform recipes form response', (done) => {
    const transformeData = transform(data)

    chai.expect(transformeData).to.have.property('keywords')
    chai.expect(transformeData).to.have.property('recipes')
    chai.expect(transformeData.recipes).to.be.an('array')


    chai.expect(transformeData).to.be.an('object').that.has.property('keywords').eql(['eggs', 'tomato'])

    const mustHaveProperties = ['title', 'ingredients', 'link', 'gif']
    mustHaveProperties.forEach(prop => chai.expect(transformeData.recipes[0]).to.be.an('object').that.has.property(prop))

    chai.expect(transformeData.recipes[0])
      .to.be.an('object')
      .that.has.property('ingredients')
      .that.has.to.be.an('array')
      .eql(['hot sauce', 'tomato'])

    done()
  })
})
