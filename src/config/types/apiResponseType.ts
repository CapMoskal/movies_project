export type TTypeOfCinema =
  | 'animated-series'
  | 'anime'
  | 'cartoon'
  | 'movie'
  | 'tv-series'

export type TStatus =
  | 'announced'
  | 'completed'
  | 'filming'
  | 'post-production'
  | 'pre-production'

export interface TRating {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface TVotes {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface TGenres {
  name: string
}

export interface TPoster {
  url: string
  previewUrl: string
}

export interface TPerson {
  id: number
  photo: string
  name: string
  enName: string
}

export interface TMovie {
  id: number
  name: string | null
  alternativeName: string | null
  poster: TPoster
  persons: TPerson[]
  logo?: {
    url: string
  }
  backdrop: TPoster
  enName: string | null
  type: TTypeOfCinema | null
  typeNumber: number
  year: number | null
  description: string | null
  shortDescription: string | null
  status: TStatus | null
  rating: TRating
  votes: TVotes
  movieLength: number | null
  totalSeriesLength: number | null
  seriesLength: number | null
  ratingMpaa: number | null
  ageRating: number | null
  genres: TGenres[]
  countries: {
    name: string
  }[]
}
