import { Input } from 'antd'
import styles from '../Header.module.scss'
import { TMovie } from '../../../config/types/apiResponseType'
import { NavLink } from 'react-router-dom'

interface Props {
  query: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
  suggestions: TMovie[]
}

export const SearchBar = ({
  query,
  handleInputChange,
  setIsSearching,
  suggestions,
}: Props) => {
  return (
    <div className={styles['header--searchbar-con']}>
      <Input
        className={styles['header--searchbar-con--input']}
        autoFocus
        value={query}
        onChange={handleInputChange}
        placeholder="Введите название фильма или сериала..."
        onBlur={() => setIsSearching(false)}
      />
      {suggestions.length > 0 && (
        <ul className={styles['header--searchbar-con--list']}>
          {suggestions.map((suggestion, index) =>
            suggestion.logo?.url ||
            suggestion.poster?.url ||
            suggestion.backdrop?.url ? (
              <NavLink
                to={`/${suggestion.id}`}
                className={
                  styles['header--searchbar-con--list--item']
                }
                key={index}
              >
                <img
                  className={
                    styles['header--searchbar-con--list--item-img']
                  }
                  src={
                    suggestion.logo?.url ||
                    suggestion.poster?.url ||
                    suggestion.backdrop?.url
                  }
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
          )}
        </ul>
      )}
    </div>
  )
}
