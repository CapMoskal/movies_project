import { Input } from 'antd'
import styles from '../Header.module.scss'
import { TMovie } from '../../../config/types/apiResponseType'
import { SuggestionsBlock } from './SuggestionsBlock'

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
  const handleBlur = () => {
    setTimeout(() => {
      setIsSearching(false)
    }, 200)
  }
  return (
    <div className={styles['header--searchbar-con']}>
      <Input
        className={styles['header--searchbar-con--input']}
        autoFocus
        value={query}
        onChange={handleInputChange}
        placeholder="Введите название фильма или сериала..."
        onBlur={handleBlur}
      />
      {suggestions.length > 0 && (
        <SuggestionsBlock
          suggestions={suggestions}
          setIsSearching={setIsSearching}
        />
      )}
    </div>
  )
}
