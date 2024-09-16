import { useParams } from 'react-router-dom'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { useDetailPage } from './useDetailPage'
import { RenderDetail } from '../../components/Detail/RenderDetail'
import { TMovie } from '../../config/types/apiResponseType'

export const DetailPage = () => {
  //   useScrollToTop()

  const { id } = useParams()
  const { error, status, movie } = useDetailPage(id)
  {
    return (
      status === 'received' && (
        <RenderDetail movie={movie as TMovie} />
      )
    )
  }
}
