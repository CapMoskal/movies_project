import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../store'
import {
  clearLines,
  loadMoviesLines,
} from '../../features/moviesLines/movies-slice-lines'

export const useMoviesLines = () => {
  const dispatch = useDispatch()
  const { genresObject, errorLines, statusLines } = useSelector(
    (state: TRootState) => state.moviesLines
  )

  useEffect(() => {
    dispatch(loadMoviesLines())

    return () => {
      dispatch(clearLines())
    }
  }, [dispatch])

  return { genresObject, errorLines, statusLines }
}
