import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMovie } from '../../config/types/apiResponseType'

interface TInitialState {
  statusCarousel: 'idle' | 'loading' | 'rejected' | 'received'
  listCarousel: TMovie[]
  errorCarousel: string | undefined
}

export const loadMoviesCarousel = createAsyncThunk<TMovie[]>(
  '@@moviesCarousel/load-movies-carousel',
  async (_, { extra: { client, api } }) => {
    const res = await client.request(api.popularMovies())
    const data = await res.data.docs
    return data
  }
)

const initialState: TInitialState = {
  statusCarousel: 'idle',
  listCarousel: [],
  errorCarousel: undefined,
}

const moviesCarouselSlice = createSlice({
  name: '@@moviesCarousel',
  initialState,
  reducers: {
    clearCarousel: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoviesCarousel.fulfilled, (state, action) => {
        state.statusCarousel = 'received'
        state.listCarousel = action.payload
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
export const { clearCarousel } = moviesCarouselSlice.actions
