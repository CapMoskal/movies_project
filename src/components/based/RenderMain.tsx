import styles from '../../components/MainPage/MainPage.module.scss'
import { TApiResponse } from '../../config/types/apiResponseType'
import { CarouselRender } from '../MainPage/Carousel/CarouselRender'

interface Props {
  listCarousel: TApiResponse[]
}

export const RenderMain = ({ listCarousel }: Props) => (
  <div className={styles['main-page-con']}>
    <CarouselRender listCarousel={listCarousel} />
  </div>
)
