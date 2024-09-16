import styles from './Lines.module.scss'
import { TMovie } from '../../config/types/apiResponseType'
import { Line } from './Line'

interface Props {
  genresObject: { [genre: string]: TMovie[] }
  error: string | undefined
  status: 'idle' | 'loading' | 'rejected' | 'received'
}

export const LinesRender = ({
  genresObject,
  error,
  status,
}: Props) => {
  if (status === 'received')
    return (
      <div className={styles['lines-con']}>
        {Object.keys(genresObject).map((key) => (
          <Line key={key} title={key} movies={genresObject[key]} />
        ))}
      </div>
    )

  return error ? <h1>Error: can't load</h1> : null
}
