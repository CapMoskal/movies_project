import { Carousel } from 'antd'
import styles from '../MainPage.module.scss'
import { CarouselItem } from './CarouselItem'
import { TMovie } from '../../../config/types/apiResponseType'

interface Props {
  listCarousel: TMovie[]
}

export const CarouselRender = ({ listCarousel }: Props) => (
  <Carousel className={styles['carousel']} autoplay>
    {listCarousel.map((movie) => (
      <CarouselItem key={movie.id} movie={movie} />
    ))}
  </Carousel>
)
