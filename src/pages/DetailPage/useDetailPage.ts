import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearDetail,
  loadDetail,
} from '../../features/detailMovie/detail-slice'
import { TRootState } from '../../store'

export const useDetailPage = (id: string | undefined) => {
  const dispatch = useDispatch()
  const { error, status, movie } = useSelector(
    (state: TRootState) => state.detail
  )

  useEffect(() => {
    dispatch(loadDetail(id))

    return () => {
      dispatch(clearDetail())
    }
  }, [dispatch, id])

  return { error, status, movie }
}
