import { NavLink } from 'react-router-dom'
import { TMovie } from '../../config/types/apiResponseType'
import styles from './Carousel.module.scss'

interface Props {
  movie: TMovie
}

export const CarouselItem = ({ movie }: Props) => {
  const backImg = movie.backdrop?.url || movie.poster?.url

  return (
    <div className={styles['carousel-item']}>
      <div
        className={styles['carousel-item--img']}
        style={{
          backgroundImage: `url(${backImg})`,
        }}
      >
        <NavLink
          to={`/:${movie.id}`}
          className={styles['carousel-item--nav']}
        >
          <div className={styles['carousel-item--nav-title']}>
            <h1>{movie.name}</h1>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
