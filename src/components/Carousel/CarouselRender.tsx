import { Carousel } from 'antd'
import styles from './Carousel.module.scss'
import { CarouselItem } from './CarouselItem'
import { TMovie } from '../../config/types/apiResponseType'

interface Props {
  list: TMovie[]
  error: string | undefined
  status: 'idle' | 'loading' | 'rejected' | 'received'
}

export const CarouselRender = ({ list, error, status }: Props) => {
  if (status === 'received')
    return (
      <Carousel className={styles['carousel']} autoplay>
        {list.map((movie) => (
          <CarouselItem key={movie.id} movie={movie} />
        ))}
      </Carousel>
    )
  return error ? <h1>Error loading movies</h1> : null
}
