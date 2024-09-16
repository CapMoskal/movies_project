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

export type TGenresNames =
  | 'аниме'
  | 'биография'
  | 'боевик'
  | 'вестерн'
  | 'военный'
  | 'детектив'
  | 'детский'
  | 'для взрослых'
  | 'документальный'
  | 'драма'
  | 'игра'
  | 'история'
  | 'комедия'
  | 'концерт'
  | 'короткометражка'
  | 'криминал'
  | 'мелодрама'
  | 'музыка'
  | 'мультфильм'
  | 'мюзикл'
  | 'новости'
  | 'приключения'
  | 'реальное ТВ'
  | 'семейный'
  | 'спорт'
  | 'ток-шоу'
  | 'триллер'
  | 'ужасы'
  | 'фантастика'
  | 'фильм-нуар'
  | 'фэнтези'
  | 'церемония'

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
  // name: TGenresNames
}

export interface TPoster {
  url: string
  previewUrl: string
}

export interface TPerson {
  id: number
  photo: string
  name: string
}

export interface TMovie {
  id: number
  name: string | null
  alternativeName: string | null
  poster: TPoster
  persons: TPerson[]
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
