import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage'
import { NotFound } from '../../pages/NotFound'

export const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
)
