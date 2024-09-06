import { API_KEY, BASE_URL, SEARCH_MOVIES } from './URLs'
import { TGenresNames } from './types/apiResponseType'

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
    isSeries?: boolean
    'rating.kp'?: string
    query?: string
    'genres.name'?: string
  }
}

const baseOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': API_KEY,
  },
}

export const getMovieByName = async (name: string) => {
  const options: TOptions = {
    ...baseOptions,
    url: BASE_URL + SEARCH_MOVIES,
    params: { page: '1', limit: '10', query: name },
  }
  return options
}

export const popularMovies = () => {
  const options: TOptions = {
    ...baseOptions,
    url: BASE_URL + '/movie',
    params: {
      page: '1',
      limit: '5',
      isSeries: false,
      'rating.kp': '9-10',
    },
  }
  return options
}

export const topGenresMovies = () => {
  const topGenres: TGenresNames[] = [
    'комедия',
    'ужасы',
    'фэнтези',
    'драма',
  ]
  const genresString = topGenres.join('&genres.name=')

  const options: TOptions = {
    ...baseOptions,
    url: BASE_URL + '/movie',
    params: {
      page: '1',
      limit: '15',
      isSeries: false,
      'genres.name': topGenres,
      // понять как сделать запрос по массиву жанров
    },
  }
  return options
}
