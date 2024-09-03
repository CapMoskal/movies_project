import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

import * as api from './config/config'
import { themeReducers } from './features/themeSwitcher/theme-slice'

export const store = configureStore({
  reducer: {
    theme: themeReducers,
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

// сделать запрос на фильмы
// настроить конфиг
// рендер фильмов на главную страницу
