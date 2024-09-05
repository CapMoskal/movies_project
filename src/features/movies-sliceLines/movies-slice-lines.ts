import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMovie } from '../../config/types/apiResponseType'

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
  const obj: { [genre: string]: TMovie[] } = data.map((movie) => {
    movie.genres.map((genre) => {})
  })
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
        // сделать функции для обработки поступающего массива
        // его нужно переделать в массива объектов
        state.listLines = action.payload.data.docs
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
