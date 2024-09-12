import { CarouselRender } from '../../components/Carousel/CarouselRender'
import { LinesRender } from '../../components/Lines/LinesRender'
import styles from '../../components/MainPage/MainPage.module.scss'
import { useMoviesCarousel } from '../../components/Carousel/useMoviesCarousel'
import { useMoviesLines } from '../../components/Lines/useMoviesLines'

export const MainPage = () => {
  const { errorCarousel, statusCarousel, listCarousel } =
    useMoviesCarousel()
  const { errorLines, statusLines, listLines } = useMoviesLines()

  if (statusCarousel === 'loading') return <h1>Loading...</h1>
  return (
    <div className={styles['main-page-con']}>
      <CarouselRender
        list={listCarousel}
        status={statusCarousel}
        error={errorCarousel}
      />
      <LinesRender
        list={listLines}
        error={errorLines}
        status={statusLines}
      />
    </div>
  )
}
