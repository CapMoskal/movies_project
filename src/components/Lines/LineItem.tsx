import { NavLink } from 'react-router-dom'
import { TMovie } from '../../config/types/apiResponseType'
import styles from './Lines.module.scss'

interface Props {
  movie: TMovie
}

export const LineItem = ({ movie }: Props) => {
  return movie.poster || movie.backdrop ? (
    <div className={styles['movie-list--card']}>
      <img
        src={movie.poster.previewUrl || movie.backdrop.previewUrl}
        alt="movie poster"
        className={styles['movie-list--card--img']}
      />
      <NavLink className={styles['movie-list--card--title']} to={''}>
        {movie.name || movie.alternativeName}
      </NavLink>
    </div>
  ) : null
}
