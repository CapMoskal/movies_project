import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

import * as api from './config/config'
import { themeReducers } from './features/themeSwitcher/theme-slice'
import { moviesCarouselReducer } from './features/moviesCarousel/movies-slice-carousel'

export const store = configureStore({
  reducer: {
    theme: themeReducers,
    moviesCarousel: moviesCarouselReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializeableCheck: false,
    }),
})

export type TRootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
