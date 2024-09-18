import { NavLink } from 'react-router-dom'
import { TMovie } from '../../../config/types/apiResponseType'
import styles from '../Header.module.scss'

interface Props {
  suggestions: TMovie[]
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
}

export const SuggestionsBlock = ({
  suggestions,
  setIsSearching,
}: Props) => (
  <ul className={styles['header--searchbar-con--list']}>
    {suggestions.map((suggestion, index) => {
      const logo =
        suggestion.logo?.url ||
        suggestion.poster?.url ||
        suggestion.backdrop?.url

      return logo ? (
        <NavLink
          onClick={() => setIsSearching(false)}
          to={`/${suggestion.id}`}
          className={styles['header--searchbar-con--list--item']}
          key={index}
        >
          <img
            className={
              styles['header--searchbar-con--list--item-img']
            }
            src={logo}
            alt="poster"
          />
          <h5
            className={
              styles['header--searchbar-con--list--item-title']
            }
          >
            {suggestion.name ||
              suggestion.alternativeName ||
              suggestion.enName}
          </h5>
        </NavLink>
      ) : null
    })}
  </ul>
)
