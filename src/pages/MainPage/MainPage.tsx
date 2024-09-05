import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TRootState } from '../../store'
import { loadMoviesCarousel } from '../../features/moviesCarousel/movies-slice-carousel'

import { RenderMain } from '../../components/based/RenderMain'

export const MainPage = () => {
  // сделать хук
  const dispatch = useDispatch()
  const { errorCarousel, listCarousel, statusCarousel } = useSelector(
    (state: TRootState) => state.moviesCarousel
  )

  useEffect(() => {
    dispatch(loadMoviesCarousel())
  }, [dispatch])
  //

  if (statusCarousel === 'loading') return <h1>Loading...</h1>
  if (statusCarousel === 'received')
    return <RenderMain listCarousel={listCarousel} />
  return errorCarousel ? <h1>Error loading movies</h1> : null
}
