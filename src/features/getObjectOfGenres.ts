import { topGenres } from '../config/config'
import { TMovie } from '../config/types/apiResponseType'

export const getObjectOfGenres = (movies: TMovie[]) => {
  const objectWithGenres: { [genre: string]: TMovie[] } = {}

  movies.forEach((movie) => {
    movie.genres?.forEach((genre) => {
      const isInTopGenres =
        !objectWithGenres[genre.name] &&
        topGenres.includes(genre.name)

      if (isInTopGenres) objectWithGenres[genre.name] = []
      objectWithGenres[genre.name]?.push(movie)
    })
  })
  return objectWithGenres
}
