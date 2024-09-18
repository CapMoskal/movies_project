import { TMovie } from '../../../config/types/apiResponseType'
import styles from '../detailPage.module.scss'

interface Props {
  movie: TMovie
}

export const LeftCon = ({ movie }: Props) => {
  return (
    <div className={styles['left-con']}>
      <img
        className={styles['left-con--img']}
        src={
          movie.poster.url ||
          movie.poster.previewUrl ||
          movie.backdrop.url ||
          movie.backdrop.previewUrl
        }
        alt="main poster"
      />
      {/* добавить возможность добавлять */}
      <button className={styles['left-con--btn-add']}>
        Добавить в мои фильмы
      </button>
      <button className={styles['left-con--btn-add']}>
        Хочу посмотреть
      </button>
    </div>
  )
}
