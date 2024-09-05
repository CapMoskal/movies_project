import { Carousel } from 'antd'
import styles from '../MainPage.module.scss'
import { CarouselItem } from './CarouselItem'
import { TApiResponse } from '../../../config/types/apiResponseType'

interface Props {
  listCarousel: TApiResponse[]
}

export const CarouselRender = ({ listCarousel }: Props) => (
  <Carousel className={styles['carousel']} autoplay>
    {listCarousel.map((movie) => (
      <CarouselItem key={movie.id} movie={movie} />
    ))}
  </Carousel>
)
