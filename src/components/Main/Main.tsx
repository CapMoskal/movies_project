import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage'

export const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </main>
)
