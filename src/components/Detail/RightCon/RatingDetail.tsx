import { TMovie } from '../../../config/types/apiResponseType'
import { MovieRating } from '../../movieRating/movieRating'
import styles from '../detailPage.module.scss'

interface Props {
  movie: TMovie
}

export const RatingDetail = ({ movie }: Props) => (
  <>
    <div className={styles['right-con--rating-con']}>
      <MovieRating rating={movie.rating.imdb || movie.rating.kp} />
    </div>
    <p className={styles['right-con--votes']}>
      {movie.votes.imdb || movie.votes.kp} оценок
    </p>
  </>
)
