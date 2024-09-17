import { TMovie } from '../../../config/types/apiResponseType'
import styles from '../detailPage.module.scss'
import { About } from './About'

interface Props {
  movie: TMovie
}

export const CenterCon = ({ movie }: Props) => {
  return (
    <div className={styles['center-con']}>
      <h1 className={styles['center-con--title']}>
        {movie.name || movie.alternativeName || movie.enName}
      </h1>
      <h3 className={styles['center-con--age-rating']}>
        {movie.ageRating}+
      </h3>
      <About movie={movie} />
    </div>
  )
}
