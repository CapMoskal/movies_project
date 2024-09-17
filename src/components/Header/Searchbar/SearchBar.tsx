import { Input } from 'antd'
import styles from '../Header.module.scss'

interface Props {
  query: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
  suggestions: string[]
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
        placeholder="Search for movies or series..."
        onBlur={() => setIsSearching(false)}
      />
      {suggestions.length > 0 && (
        <ul className={styles['header--searchbar-con--list']}>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
