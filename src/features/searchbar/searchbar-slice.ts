import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMovie } from '../../config/types/apiResponseType'

interface TInitialState {
  status: 'idle' | 'loading' | 'rejected' | 'received'
  movies: TMovie[] | []
  error: string | undefined
}

const initialState: TInitialState = {
  status: 'idle',
  error: undefined,
  movie: [],
}

export const loadListBySearch = createAsyncThunk<TMovie[]>(
  '@@searchbar/load-list',
  async (name: string, { extra: { client, api } }) => {
    const res = await client.request(api.getMovieBySearch(name))
    const data: TMovie[] = await res.data.docs
    return data
  }
)

const searchbarSlice = createSlice({
  name: '@@searchbar',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadListBySearch.fulfilled, (state, action) => {
        state.movie = action.payload
        state.status = 'received'
      })
      .addCase(loadListBySearch.pending, (state) => {
        state.status = 'loading'
        state.error = undefined
      })
      .addCase(loadListBySearch.rejected, (state, action) => {
        state.error = action.error.message
        state.status = action.meta.requestStatus
      })
  },
})

export const searchbarReducer = searchbarSlice.reducer
