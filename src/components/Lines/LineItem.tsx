import { NavLink } from 'react-router-dom'
import { TMovie } from '../../config/types/apiResponseType'
import styles from './Lines.module.scss'
import { MovieRating } from '../movieRating/movieRating'

interface Props {
  movie: TMovie
}

export const LineItem = ({ movie }: Props) => {
  return movie.poster || movie.backdrop ? (
    <NavLink
      to={`/${movie.id}`}
      className={styles['movie-list--card']}
    >
      <img
        src={
          movie.logo?.url ||
          movie.poster.previewUrl ||
          movie.backdrop.previewUrl
        }
        alt="movie poster"
        className={styles['movie-list--card--img']}
      />
      {movie.rating.imdb ? (
        <MovieRating rating={movie.rating.imdb} />
      ) : null}
    </NavLink>
  ) : null
}
