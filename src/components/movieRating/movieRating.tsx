import React from 'react'
import styles from './movieRating.module.scss'

interface Props {
  rating: number
}

const greenCol: React.CSSProperties = {
  backgroundColor: 'green',
}
const grayCol: React.CSSProperties = {
  backgroundColor: 'gray',
}
const redCol: React.CSSProperties = {
  backgroundColor: 'red',
}

export const MovieRating = ({ rating }: Props) => {
  const setColor = (rating: number) => {
    if (rating > 7) {
      return greenCol
    } else if (rating > 5) {
      return grayCol
    } else {
      return redCol
    }
  }
  return (
    <p style={() => setColor(rating)} className={styles['rating']}>
      {rating}
    </p>
  )
}
