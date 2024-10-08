import { TMovie } from '../../../config/types/apiResponseType'
import styles from '../detailPage.module.scss'

interface Props {
  movie: TMovie
}

export const About = ({ movie }: Props) => {
  const releaseDate = {
    title: 'Дата выхода',
    payload: movie.year,
  }
  const genres = {
    title: 'Жанры',
    payload: movie.genres,
  }
  const length = {
    title: 'Длительность',
    payload: movie.movieLength + ' мин',
  }

  const aboutList = [releaseDate, genres, length]

  return (
    <div className={styles['center-con--about']}>
      <h1>
        о{' '}
        {movie.type === 'movie' ||
        movie.type === 'cartoon' ||
        movie.type === 'anime'
          ? 'фильме'
          : 'сериале'}
      </h1>
      {aboutList.map((item) => {
        return (
          <div
            key={item.title}
            className={styles['center-con--about-item']}
          >
            <h5>{item.title}</h5>
            <p>
              {Array.isArray(item.payload)
                ? item.payload.map((elem) => elem.name).join(', ')
                : item.payload}
            </p>
          </div>
        )
      })}
    </div>
  )
}
