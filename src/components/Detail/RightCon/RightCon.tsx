import { TMovie } from '../../../config/types/apiResponseType'
import styles from '../detailPage.module.scss'
import { PersonsList } from './PersonsList'
import { RatingDetail } from './RatingDetail'

interface Props {
  movie: TMovie
}

export const RightCon = ({ movie }: Props) => {
  return (
    <div className={styles['right-con']}>
      {movie.rating.imdb ? <RatingDetail movie={movie} /> : null}
      {movie.persons && <PersonsList persons={movie.persons} />}
    </div>
  )
}
