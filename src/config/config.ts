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

export const topGenres = [
  'комедия',
  'ужасы',
  'драма',
  'короткометражка',
]
export const topGenresMovies = () => {
  const options: TOptions = {
    ...baseOptions,
    url: BASE_URL + '/movie',
    params: {
      page: '1',
      limit: '100',
      isSeries: false,
      'genres.name': topGenres,
      'rating.kp': '3-10',
    },
  }
  return options
}
