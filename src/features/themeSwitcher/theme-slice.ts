import { createSlice } from '@reduxjs/toolkit'

export type TTheme = 'light' | 'dark'
const initialState: TTheme = 'dark'

const themeSlice = createSlice({
  name: '@@theme',
  initialState: initialState as TTheme,
  reducers: {
    setTheme: (_, action) => action.payload,
  },
})

export const { setTheme } = themeSlice.actions
export const themeReducers = themeSlice.reducer
