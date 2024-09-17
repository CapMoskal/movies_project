import {
  API_KEY,
  BASE_URL,
  SEARCH_BY_ID,
  SEARCH_MOVIES,
} from './URLs'

interface TOptions {
  method: string
  headers: {
    accept: string
    'X-API-KEY': string
  }
  url: string
  params?: {
    page: string
    limit: string
    isSeries?: boolean
    'rating.kp'?: string
    query?: string
    'genres.name'?: string[]
  }
}

const baseOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': API_KEY,
  },
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

export const topGenres = [
  'комедия',
  'ужасы',
  'драма',
  'короткометражка',
  'мелодрама',
]
export const getGenresMovies = () => {
  const options: TOptions = {
    ...baseOptions,
    url: BASE_URL + '/movie',
    params: {
      page: '1',
      limit: '150',
      isSeries: false,
      'genres.name': topGenres,
      'rating.kp': '3-10',
    },
  }
  return options
}

export const getMovieById = (id: number) => {
  const options: TOptions = {
    ...baseOptions,
    url: BASE_URL + SEARCH_BY_ID(id),
  }
  return options
}

export const getMovieBySearch = (name: string) => {
  const options: TOptions = {
    ...baseOptions,
    url: BASE_URL + SEARCH_MOVIES,
    params: {
      page: '1',
      limit: '15',
      'rating.kp': '3-10',
      query: name,
    },
  }
  return options
}
