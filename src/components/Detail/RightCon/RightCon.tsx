import { TMovie } from '../../../config/types/apiResponseType'
import { MovieRating } from '../../movieRating/movieRating'
import styles from '../detailPage.module.scss'
import { PersonsList } from './PersonsList'

interface Props {
  movie: TMovie
}

export const RightCon = ({ movie }: Props) => {
  return (
    <div className={styles['right-con']}>
      {movie.rating.imdb ? (
        <>
          <div className={styles['right-con--rating-con']}>
            <MovieRating
              rating={movie.rating.imdb || movie.rating.kp}
            />
          </div>
          <p className={styles['right-con--votes']}>
            {movie.votes.imdb || movie.votes.kp} оценок
          </p>
        </>
      ) : null}
      {movie.persons && <PersonsList persons={movie.persons} />}
    </div>
  )
}
