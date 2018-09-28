import chai from 'chai'
import fetchRecipes from '../../src/application/interactors/recipeInteractor'

const searchRecipesMock = async ingredientSet => [
  {
    title: 'Hash and Eggs',
    ingredients: `${ingredientSet},hot sauce,tomato`,
    href: 'http://www.nibbledish.com/people/Endymion/recipes/hash-and-eggs',
    thumbnail: 'https://xpto.com/41i2j34oo2.jpg',
  },
  {
    title: 'Speedy Egg & Cheese Stack',
    ingredients: `cheese,${ingredientSet},tomato`,
    href: 'http://www.kraftfoods.com/kf/recipes/speedy-egg-cheese-stack-91423.aspx',
    thumbnail: 'https://xpto.com/h432jkh4k23.jpg',
  },
]

const searchGifMock = async title => `https://giphy.com/gifs/${title}.gif`

describe('recipeInteractor', () => {
  it('should return an object with ingredients and recipes', async () => {
    const ingredients = 'pasta,mushroms'

    const data = await fetchRecipes({
      ingredients,
      searchRecipes: searchRecipesMock,
      searchGif: searchGifMock,
    })

    chai.expect(data).to.have.property('ingredients')
    chai.expect(data).to.have.property('recipes')
    chai.expect(data.recipes).to.be.an('array')

    const recipeProperties = ['title', 'ingredients', 'href', 'gifUrl']

    recipeProperties.forEach(prop => chai.expect(data.recipes[0]).to.be.an('object').that.has.property(prop))
  })
})
