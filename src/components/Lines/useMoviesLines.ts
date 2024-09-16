import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../store'
import { loadMoviesLines } from '../../features/moviesLines/movies-slice-lines'

export const useMoviesLines = () => {
  const dispatch = useDispatch()
  const { genresObject, errorLines, statusLines } = useSelector(
    (state: TRootState) => state.moviesLines
  )

  useEffect(() => {
    dispatch(loadMoviesLines())
  }, [dispatch])

  return { genresObject, errorLines, statusLines }
}
