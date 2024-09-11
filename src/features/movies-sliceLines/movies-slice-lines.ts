import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMovie } from '../../config/types/apiResponseType'
import { topGenres } from '../../config/config'

interface TDocs {
  docs: TMovie[]
}
interface TData {
  data: TDocs
}

interface TInitialState {
  statusLines: 'idle' | 'loading' | 'rejected' | 'received'
  listLines: { [genre: string]: TMovie[] }
  errorLines: string | undefined
}

const getObjectOfGenres = (data: TMovie[]) => {
  const objectWGenres: { [genre: string]: TMovie[] } = {}

  data.forEach((movie) => {
    movie.genres.forEach((genre) => {
      // разобраться почему не добавляет в объект сущности
      const isAdd =
        !objectWGenres[genre.name] && topGenres.includes(genre.name)
      if (isAdd) {
        objectWGenres[genre.name] = []
      }
      objectWGenres[genre.name].push(movie)
    })
  })
  return objectWGenres
}

export const loadMoviesLines = createAsyncThunk<TData>(
  '@@moviesLines/load-movies-lines',
  (_, { extra: { client, api } }) =>
    client.request(api.topGenresMovies())
)

const initialState: TInitialState = {
  statusLines: 'idle',
  errorLines: undefined,
  listLines: {},
}

const moviesLinesSlice = createSlice({
  name: '@@moviesLines',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadMoviesLines.fulfilled, (state, action) => {
        // console.log(action.payload)
        // state.listLines = getObjectOfGenres(action.payload)
        state.statusLines = 'received'
      })
      .addCase(loadMoviesLines.rejected, (state, action) => {
        state.statusLines = action.meta.requestStatus
        state.errorLines = action.error.message
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.statusLines = 'loading'
          state.errorLines = undefined
        }
      )
  },
})

export const moviesLinesReducer = moviesLinesSlice.reducer
