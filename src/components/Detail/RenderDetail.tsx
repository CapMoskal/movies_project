import { TMovie } from '../../config/types/apiResponseType'
import { CenterCon } from './CenterCon/CenterCon'
import styles from './detailPage.module.scss'
import { LeftCon } from './LeftCon/LeftCon'
import { RightCon } from './RightCon/RightCon'

interface Props {
  movie: TMovie
}

export const RenderDetail = ({ movie }: Props) => {
  return (
    <div className={styles['detail-con']}>
      <LeftCon movie={movie} />
      <CenterCon movie={movie} />
      <RightCon movie={movie} />
    </div>
  )
}
