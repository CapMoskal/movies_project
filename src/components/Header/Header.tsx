import { ThemeSwitcher } from './ThemeSwitcher'
import { HeaderBtns } from './HeaderBtns'
import styles from './Header.module.scss'
import { useState } from 'react'
import { SearchBar } from './Searchbar/SearchBar'
import { TMovie } from '../../config/types/apiResponseType'
import { useSearch } from './Searchbar/useSearch'

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<TMovie[]>([])

  const handleSearch = () => {
    setIsSearching(true)
  }

  useSearch(query, setSuggestions)

  return (
    <header className={styles['header']}>
      <h3>MoviesWhat?</h3>
      {isSearching ? (
        <SearchBar
          query={query}
          handleInputChange={(e) => setQuery(e.target.value)}
          setIsSearching={setIsSearching}
          suggestions={suggestions}
        />
      ) : (
        <HeaderBtns searchSwitch={handleSearch} />
      )}

      <ThemeSwitcher />
    </header>
  )
}
