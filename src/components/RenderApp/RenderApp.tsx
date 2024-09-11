import { useWindowSize } from '../../hooks/useWindowSize'
import { Main } from '../../pages/Main'
import { Header } from '../Header/Header'
import { MobileHeader } from '../MobileHeader/MobileHeader'

export const RenderApp = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 768 ? <Header /> : <MobileHeader />}
      {/* <Main /> */}
      {/* footer */}
    </>
  )
}
