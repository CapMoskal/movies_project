import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../store'
import { loadMoviesCarousel } from '../../features/moviesCarousel/movies-slice-carousel'
import { useEffect } from 'react'

export const useMoviesCarousel = () => {
  const dispatch = useDispatch()
  const { errorCarousel, listCarousel, statusCarousel } = useSelector(
    (state: TRootState) => state.moviesCarousel
  )

  useEffect(() => {
    dispatch(loadMoviesCarousel())
  }, [dispatch])

  return { errorCarousel, listCarousel, statusCarousel }
}
