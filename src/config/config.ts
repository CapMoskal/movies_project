import axios from 'axios'
import { API_KEY, BASE_URL, SEARCH_MOVIES } from './URLs'
import { TApiResponse } from './types/apiResponseType'

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

interface TData {
  docs: TApiResponse[]
  page: number
  pages: number
  total: number
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

const getRequest = async (options: TOptions) => {
  try {
    // попробовать также гет с ссылкой и настройками
    const res = await axios.request(options)
    const data: TData = await res.data
    return data.docs
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

export const getMovieLastMonth = async (/*date: string*/) => {
  const options = {
    ...baseOptions,
    url: BASE_URL + '/movie',
    params: {
      page: '1',
      limit: '5',
      isSeries: 'false',
      'rating.kp': '9-10',
      // 'premiere.world': date,
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
