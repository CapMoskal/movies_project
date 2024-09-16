import { TMovie } from '../../config/types/apiResponseType'
import styles from './detailPage.module.scss'

interface Props {
  movie: TMovie
}

export const CenterCon = ({ movie }: Props) => {
  return (
    <div className={styles['center-con']}>
      <h1 className={styles['center-con--title']}>
        {movie.name || movie.alternativeName || movie.enName}
      </h1>
    </div>
  )
}
