import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

import * as api from './config/config'
import { themeReducers } from './features/themeSwitcher/theme-slice'
import { moviesCarouselReducer } from './features/moviesCarousel/movies-slice-carousel'
import { moviesLinesReducer } from './features/moviesLines/movies-slice-lines'
import { detailReducer } from './features/detailMovie/detail-slice'

export const store = configureStore({
  reducer: {
    theme: themeReducers,
    moviesCarousel: moviesCarouselReducer,
    moviesLines: moviesLinesReducer,
    detail: detailReducer,
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
      // serializeableCheck: false,
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})

export type TRootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
