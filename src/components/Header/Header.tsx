import { ThemeSwitcher } from './ThemeSwitcher'
import { HeaderBtns } from './HeaderBtns'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'
import { SearchBar } from './Searchbar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../store'
import { loadListBySearch } from '../../features/searchbar/searchbar-slice'

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    setIsSearching(true)
  }

  const dispatch = useDispatch()
  const { error, status, movies } = useSelector(
    (state: TRootState) => state.searchbar
  )

  useEffect(() => {
    if (query.length > 0) {
      dispatch(loadListBySearch(query))
    }
  }, [query])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(e.target.value)
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
