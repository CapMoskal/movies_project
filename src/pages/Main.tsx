import { Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage/MainPage'
import { NotFound } from './NotFound'

export const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
)
