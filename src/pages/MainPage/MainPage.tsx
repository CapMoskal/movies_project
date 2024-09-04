import { CarouselRender } from '../../components/MainPage/Carousel/CarouselRender'
import styles from '../../components/MainPage/MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={styles['main-page-con']}>
      <CarouselRender />
    </div>
  )
}
