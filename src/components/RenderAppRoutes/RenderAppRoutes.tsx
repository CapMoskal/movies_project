import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage/MainPage'
import { DetailPage } from '../../pages/DetailPage/DetailPage'
import { NotFound } from '../../pages/NotFound'
import { Layout } from '../Layout'
import { My } from '../../pages/My/My'
import { Serials } from '../../pages/Serials/Serials'

export const RenderAppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":id" element={<DetailPage />} />

          <Route path="serials" element={<Serials />} />

          <Route path="my" element={<My />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
