import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage/MainPage'
import { DetailPage } from '../../pages/DetailPage/DetailPage'
import { NotFound } from '../../pages/NotFound'
import { Layout } from '../Layout'

export const RenderApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<DetailPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
