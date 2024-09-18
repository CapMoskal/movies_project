import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { MobileHeader } from './MobileHeader/MobileHeader'
import { useWindowSize } from '../hooks/useWindowSize'

export const Layout = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 768 ? <Header /> : <MobileHeader />}
      <main>
        <Outlet />
      </main>
      <footer>smtg</footer>
    </>
  )
}
