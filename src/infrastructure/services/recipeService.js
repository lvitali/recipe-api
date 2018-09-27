import createHttpClient from '../support/httpClientFactory'

const httpClient = createHttpClient('http://www.recipepuppy.com/api/')

const ping = async () => {
  const response = await httpClient.get()

  if (response.status === 503) {
    const error = new Error('Serviço de receitas indisponível')
    error.status = 503
    throw error
  }
}

export { ping }

