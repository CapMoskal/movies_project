import { ThemeSwitcher } from './ThemeSwitcher'
import { HeaderBtns } from './HeaderBtns'
import styles from './Header.module.scss'
import { useState } from 'react'
import { SearchBar } from './Searchbar/SearchBar'
import { TMovie } from '../../config/types/apiResponseType'

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [query, setQuery] = useState('')

  // не нужно, будем брать из rtk
  const [suggestions, setSuggestions] = useState<TMovie[]>([])

  const handleSearch = () => {
    setIsSearching(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(e.target.value)

    if (e.target.value.length > 0) {
      setSuggestions() // Заглушка
    } else {
      setSuggestions([])
    }
  }

  return (
    <header className={styles['header']}>
      <h3>MoviesWhat?</h3>
      {isSearching ? (
        <SearchBar
          query={query}
          handleInputChange={handleInputChange}
          setIsSearching={setIsSearching}
          suggestions={movies}
        />
      ) : (
        <HeaderBtns searchSwitch={handleSearch} />
      )}

      <ThemeSwitcher />
    </header>
  )
}
