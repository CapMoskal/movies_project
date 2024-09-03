import axios from 'axios'
import { API_KEY, BASE_URL, SEARCH_MOVIES } from './URLs'

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

const baseOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': API_KEY,
  },
  //   url: BASE_URL + SEARCH_MOVIES,
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
    ...baseOptions,
    url: BASE_URL + SEARCH_MOVIES,
    params: { page: '1', limit: '10', query: name },
  }
  return getRequest(options)
}

export const getMovieLastMonth = async () => {
  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()

  const searchDate = `${day}.${
    month - 1
  }.${year}-${day}.${month}.${year}`

  const options = {
    ...baseOptions,
    url: BASE_URL + '/movie',
    params: {
      page: '1',
      limit: '5',
      'premiere.russia': searchDate,
    },
  }
  return getRequest(options)
}

// export const getMovieByGenres = async (genres: ???) => {
//   const options = {
//     ...baseOptions,
//     url: BASE_URL + SEARCH_MOVIES,
//     params: { page: '1', limit: '10', ???? genres: genres ?????? },
//   }
// }
