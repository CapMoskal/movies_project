import { ThemeSwitcher } from './ThemeSwitcher'
import { HeaderBtns } from './HeaderBtns'
import styles from './Header.module.scss'
import { useState } from 'react'
import { Input } from 'antd'
import { SearchBar } from './Searchbar/SearchBar'

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleSearch = () => {
    setIsSearching(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(e.target.value)
    // Здесь должна быть логика для получения предложений на основе query
    // Например, можно использовать debounce и делать запрос к API
    if (e.target.value.length > 0) {
      setSuggestions(['Movie 1', 'Movie 2', 'Series 1']) // Заглушка
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
          suggestions={suggestions}
        />
      ) : (
        <HeaderBtns searchSwitch={handleSearch} />
      )}

      <ThemeSwitcher />
    </header>
  )
}
