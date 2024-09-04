import { Carousel } from 'antd'
import styles from '../MainPage.module.scss'
import { useRangeDays } from '../useRangeDate'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TRootState } from '../../../store'
import { loadMoviesCarousel } from '../../../features/moviesCarousel/movies-slice-carousel'
import { CarouselItem } from './CarouselItem'

export const CarouselRender = () => {
  const lastMonthDate = useRangeDays(-30)
  const dispatch = useDispatch()

  const { error, listCarousel, status } = useSelector(
    (state: TRootState) => state.moviesCarousel
  )
  console.log(listCarousel)

  useEffect(() => {
    dispatch(loadMoviesCarousel())
  }, [dispatch])

  return (
    <>
      {status === 'received' && (
        <Carousel className={styles['carousel']} autoplay>
          {listCarousel.map((movie) => (
            <CarouselItem key={movie.id} movie={movie} />
          ))}
        </Carousel>
      )}
    </>
  )
}
