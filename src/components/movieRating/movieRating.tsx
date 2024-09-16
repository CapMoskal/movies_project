import styles from './movieRating.module.scss'

interface Props {
  rating: number
}

export const MovieRating = ({ rating }: Props) => {
  const setColor = (rating: number) => {
    if (rating > 7) {
      return { backgroundColor: 'green' }
    } else if (rating > 5) {
      return { backgroundColor: 'gray' }
    } else {
      return { backgroundColor: 'red' }
    }
  }

  return (
    <p style={setColor(rating)} className={styles['rating']}>
      {rating}
    </p>
  )
}
