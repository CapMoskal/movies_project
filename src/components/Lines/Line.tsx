import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { TMovie } from '../../config/types/apiResponseType'
import styles from './Lines.module.scss'
import { LineItem } from './LineItem'
import { useRef } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'

interface Props {
  title: string
  movies: TMovie[]
}

export const Line = ({ title, movies }: Props) => {
  const listRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const { width } = useWindowSize()

  return (
    <div className={styles['container']}>
      <h1>{title}</h1>
      <div className={styles['line']}>
        {width > 768 && (
          <LeftOutlined
            className={styles['line--scroll-btn']}
            onClick={scrollLeft}
          ></LeftOutlined>
        )}

        <div className={styles['movie-list']} ref={listRef}>
          {movies.map((movie) => (
            <LineItem key={movie.id} movie={movie} />
          ))}
        </div>

        {width > 768 && (
          <RightOutlined
            className={styles['line--scroll-btn']}
            onClick={scrollRight}
          ></RightOutlined>
        )}
      </div>
    </div>
  )
}
