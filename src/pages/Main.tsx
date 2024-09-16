import { Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage/MainPage'
import { NotFound } from './NotFound'
import { DetailPage } from './DetailPage/DetailPage'

export const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
)
