import axios from 'axios'
import { useEffect } from 'react'
import { getMovieBySearch } from '../../../config/config'
import { TMovie } from '../../../config/types/apiResponseType'

export const useSearch = (
  query: string,
  setSuggestions: React.Dispatch<React.SetStateAction<TMovie[]>>
) => {
  useEffect(() => {
    if (query.length > 0) {
      axios
        .request(getMovieBySearch(query))
        .then((res) => res.data)
        .then((data) => {
          setSuggestions(data.docs)
        })
        .catch((err) => console.error(err.message))
    } else {
      setSuggestions([])
    }
  }, [query])
}
