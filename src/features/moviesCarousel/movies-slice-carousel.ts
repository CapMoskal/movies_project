import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMovie } from '../../config/types/apiResponseType'

interface TInitialState {
  statusCarousel: 'idle' | 'loading' | 'rejected' | 'received'
  listCarousel: TMovie[]
  errorCarousel: string | undefined
}
interface TDocs {
  docs: TMovie[]
}
interface TData {
  data: TDocs
}

export const loadMoviesCarousel = createAsyncThunk<TData>(
  '@@moviesCarousel/load-movies-carousel',
  (_, { extra: { client, api } }) =>
    client.request(api.popularMovies())
)

const initialState: TInitialState = {
  statusCarousel: 'idle',
  listCarousel: [],
  errorCarousel: undefined,
}

const moviesCarouselSlice = createSlice({
  name: '@@moviesCarousel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMoviesCarousel.fulfilled, (state, action) => {
        // PayloadAction<TData> ?????
        state.statusCarousel = 'received'
        state.listCarousel = action.payload.data.docs
      })
      .addCase(loadMoviesCarousel.rejected, (state, action) => {
        state.statusCarousel = action.meta.requestStatus
        state.errorCarousel = action.error.message
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.statusCarousel = 'loading'
          state.errorCarousel = undefined
        }
      )
  },
})

export const moviesCarouselReducer = moviesCarouselSlice.reducer
