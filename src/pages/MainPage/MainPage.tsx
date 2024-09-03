import { CarouselRender } from '../../components/MainPage/CarouselRender'
import styles from '../../components/MainPage/MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={styles['main-page-con']}>
      <CarouselRender />
    </div>
  )
}
