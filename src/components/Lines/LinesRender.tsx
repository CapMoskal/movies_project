import { TMovie } from '../../config/types/apiResponseType'

interface Props {
  list: { [genre: string]: TMovie[] }
  error: string | undefined
  status: 'idle' | 'loading' | 'rejected' | 'received'
}

export const LinesRender = ({ list, error, status }: Props) => {
  if (status === 'received') return <h1>lines here</h1>
  return error ? <h1>Error loading movies</h1> : null
}
