import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMovie } from '../../config/types/apiResponseType'

interface TInitialState {
  status: 'idle' | 'loading' | 'rejected' | 'received'
  movie: TMovie | null
  error: string | undefined
}

const initialState: TInitialState = {
  status: 'idle',
  movie: null,
  error: undefined,
}

export const loadDetail = createAsyncThunk<TMovie>(
  '@@detail/load-detail',
  async (id: number, { extra: { client, api } }) => {
    const res = await client.request(api.getMovieById(id))
    const data: TMovie = await res.data
    return data
  }
)

const detailSlice = createSlice({
  name: '@@detail',
  reducers: {
    clearDetail: () => initialState,
  },
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadDetail.fulfilled, (state, action) => {
        state.movie = action.payload
        state.status = 'received'
      })
      .addCase(loadDetail.pending, (state, action) => {
        state.status = 'loading'
        state.error = undefined
      })
      .addCase(loadDetail.rejected, (state, action) => {
        state.error = action.error.message
        state.status = 'rejected'
      })
  },
})

export const detailReducer = detailSlice.reducer
export const { clearDetail } = detailSlice.actions
