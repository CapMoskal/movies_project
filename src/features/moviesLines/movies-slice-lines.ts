import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMovie } from '../../config/types/apiResponseType'
import { getObjectOfGenres } from '../getObjectOfGenres'

interface TInitialState {
  statusLines: 'idle' | 'loading' | 'rejected' | 'received'
  genresObject: { [genre: string]: TMovie[] }
  errorLines: string | undefined
}

export const loadMoviesLines = createAsyncThunk<TMovie[]>(
  '@@moviesLines/load-movies-lines',
  async (_, { extra: { client, api } }) => {
    const res = await client.request(api.getGenresMovies())
    const data = await res.data.docs
    return data
  }
)

const initialState: TInitialState = {
  statusLines: 'idle',
  errorLines: undefined,
  genresObject: {},
}

const moviesLinesSlice = createSlice({
  name: '@@moviesLines',
  reducers: {
    clearLines: () => initialState,
  },
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadMoviesLines.fulfilled, (state, action) => {
        state.genresObject = getObjectOfGenres(action.payload)
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
export const { clearLines } = moviesLinesSlice.actions
