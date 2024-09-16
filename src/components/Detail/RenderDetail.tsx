import { TMovie } from '../../config/types/apiResponseType'
import styles from './detailPage.module.scss'

interface Props {
  movie: TMovie
}

export const RenderDetail = ({ movie }: Props) => {
  return (
    <div className={styles['detail-con']}>
      <div className={styles['img-con']}>
        <img
          className={styles['img-con--img']}
          src={movie.poster.url}
          alt="main poster"
        />
      </div>
      <div className={styles['info-con']}>
        <h1 className={styles['info-con--title']}>
          {movie.name || movie.alternativeName || movie.enName}
        </h1>
      </div>
      <div className={styles['extra-info-con']}></div>
    </div>
  )
}
