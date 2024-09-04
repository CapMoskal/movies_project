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
  status: 'idle' | 'loading' | 'rejected' | 'received'
  listCarousel: TApiResponse[]
  error: string | null
}
const initialState: TInitialState = {
  status: 'idle',
  listCarousel: [],
  error: null,
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
          state.status = 'received'
          state.listCarousel = action.payload
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading'
          state.error = null
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (
          state,
          action: PayloadAction<TApiResponse[] | undefined>
        ) => {
          state.status = 'rejected'
          state.error = action.payload || action.error.message
        }
      )
  },
})

export const moviesCarouselReducer = moviesCarouselSlice.reducer
