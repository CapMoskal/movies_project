import axios from 'axios'

export const BASE_URL = 'https://api.kinopoisk.dev/v1.4'

export const API_KEY = '35MA1RE-FR348QQ-KG5JYTZ-AF4VS8P'

export const SEARCH_BY_NAME = '/movie/search'

interface TOptions {
  method: string
  headers: {
    accept: string
    'X-API-KEY': string
  }
  url: string
  params: {
    page: string
    limit: string
  }
}

const baseOption = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': API_KEY,
  },
  //   url: BASE_URL + SEARCH_BY_NAME,
  //   params: { page: '1', limit: '10', query: name },
}

const getRequest = async (options: TOptions) /*: Promise<>*/ => {
  try {
    // попробовать также гет с ссылкой и настройками
    const res = await axios.request(options)
    const data = await res.data
    return data
  } catch (err) {
    console.log(err.message)
    return err.message
  }
}

export const getMovieByName = async (name: string) => {
  const options = {
    ...baseOption,
    url: BASE_URL + SEARCH_BY_NAME,
    params: { page: '1', limit: '10', query: name },
  }
  return getRequest(options)
}
