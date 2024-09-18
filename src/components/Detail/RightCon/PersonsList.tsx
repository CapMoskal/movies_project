import { useState } from 'react'
import { TPerson } from '../../../config/types/apiResponseType'
import styles from '../detailPage.module.scss'

interface Props {
  persons: TPerson[]
}

export const PersonsList = ({ persons }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)
  const minLenght = 8
  const maxLenght = 16

  const renderPersons = (persons: TPerson[]) => {
    if (isExpanded) {
      return persons.map((person, index) => {
        return index < maxLenght ? (
          <li key={index}>{person.name || person.enName}</li>
        ) : null
      })
    }

    return persons.map((person, index) => {
      return index < minLenght ? (
        <li key={index}>{person.name || person.enName}</li>
      ) : null
    })
  }

  return (
    <div className={styles['right-con--actors-con']}>
      <h3>В главных ролях:</h3>
      <ul className={styles['right-con--actors-con--persons-list']}>
        {renderPersons(persons)}
      </ul>
      {persons.length > minLenght ? (
        <button
          onClick={toggleExpand}
          className={styles['right-con--actors-con--btn']}
        >
          {isExpanded ? 'Свернуть' : 'Развернуть'}
        </button>
      ) : null}
    </div>
  )
}
