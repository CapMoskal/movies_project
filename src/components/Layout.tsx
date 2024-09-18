import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { MobileHeader } from './MobileHeader/MobileHeader'
import { useWindowSize } from '../hooks/useWindowSize'
import { Footer } from './Footer/Footer'

export const Layout = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 768 ? <Header /> : <MobileHeader />}
      <main className="main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  )
}
