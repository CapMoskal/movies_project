import styles from './detailPage.module.scss'
import { TMovie } from '../../config/types/apiResponseType'
import { CenterCon } from './CenterCon/CenterCon'
import { LeftCon } from './LeftCon/LeftCon'
import { RightCon } from './RightCon/RightCon'
import { useScrollToTop } from '../../hooks/useScrollToTop'

interface Props {
  movie: TMovie
}

export const RenderDetail = ({ movie }: Props) => {
  useScrollToTop()

  return (
    <div className={styles['detail-con']}>
      <LeftCon movie={movie} />
      <CenterCon movie={movie} />
      <RightCon movie={movie} />
    </div>
  )
}
