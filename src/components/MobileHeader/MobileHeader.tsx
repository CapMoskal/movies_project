import { useState } from 'react'
import { SearchBar } from '../Header/Searchbar/SearchBar'
import { MenuButton } from './MenuButton'
import styles from './MobileHeader.module.scss'
import { TMovie } from '../../config/types/apiResponseType'
import { useSearch } from '../Header/Searchbar/useSearch'

export const MobileHeader = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<TMovie[]>([])

  const handleSearch = () => {
    setIsSearching(true)
  }

  useSearch(query, setSuggestions)

  return (
    <header className={styles['header']}>
      {isSearching ? (
        <SearchBar
          query={query}
          handleInputChange={(e) => setQuery(e.target.value)}
          setIsSearching={setIsSearching}
          suggestions={suggestions}
        />
      ) : (
        <>
          <h3>MoviesWhat?</h3>
          <MenuButton searchSwitch={handleSearch} />
        </>
      )}
    </header>
  )
}
