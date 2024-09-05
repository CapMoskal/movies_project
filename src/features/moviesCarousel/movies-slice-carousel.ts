import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { TApiResponse } from '../../config/types/apiResponseType'

export const loadMoviesCarousel = createAsyncThunk<TApiResponse[]>(
  '@@moviesCarousel/load-movies-for-carousel',
  (_, { extra: { client, api } }) => {
    return api.getMovieLastMonth(/*date*/)
    // проверить работает ли
  }
)

interface TInitialState {
  statusCarousel: 'idle' | 'loading' | 'rejected' | 'received'
  listCarousel: TApiResponse[]
  errorCarousel: string | null
}
const initialState: TInitialState = {
  statusCarousel: 'idle',
  listCarousel: [],
  errorCarousel: null,
}

const moviesCarouselSlice = createSlice({
  name: '@@moviesCarousel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        loadMoviesCarousel.fulfilled,
        (state, action: PayloadAction<TApiResponse[]>) => {
          state.statusCarousel = 'received'
          state.listCarousel = action.payload
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.statusCarousel = 'loading'
          state.errorCarousel = null
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (
          state,
          action: PayloadAction<TApiResponse[] | undefined>
        ) => {
          state.statusCarousel = 'rejected'
          state.errorCarousel =
            action.payload || action.errorCarousel.message
        }
      )
  },
})

export const moviesCarouselReducer = moviesCarouselSlice.reducer
