import { ThemeSwitcher } from './ThemeSwitcher'
import { HeaderBtns } from './HeaderBtns'
import styles from './Header.module.scss'

export const Header = () => (
  <header className={styles['header']}>
    <h3>MoviesWhat?</h3>
    <HeaderBtns />
    <ThemeSwitcher />
  </header>
)
