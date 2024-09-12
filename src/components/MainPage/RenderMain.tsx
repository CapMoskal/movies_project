import styles from '../../components/MainPage/MainPage.module.scss'
import { TMovie } from '../../config/types/apiResponseType'
import { CarouselRender } from '../MainPage/Carousel/CarouselRender'

interface Props {
  listCarousel: TMovie[]
}

export const RenderMain = ({ listCarousel }: Props) => (
  <div className={styles['main-page-con']}>
    <CarouselRender listCarousel={listCarousel} />
    {/* здесь будут линии с фильмами (мап по жанрам?) */}
  </div>
)
