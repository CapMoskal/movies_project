import { TApiResponse } from '../../../config/types/apiResponseType'
import styles from '../MainPage.module.scss'

interface Props {
  movie: TApiResponse
}

export const CarouselItem = ({ movie }: Props) => {
  const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div className={styles['carousel-item']}>
      <div
        style={{
          ...contentStyle,
          backgroundImage: `url(${movie.backdrop?.url})`,
        }}
      >
        <h1>{movie.name}</h1>
      </div>
    </div>
  )
}
