import { MenuButton } from './MenuButton'
import styles from './MobileHeader.module.scss'

export const MobileHeader = () => (
  <header className={styles['header']}>
    <h3>MoviesWhat?</h3>
    {/* search bar here */}
    <MenuButton />
  </header>
)
