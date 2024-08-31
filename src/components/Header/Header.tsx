import { ThemeSwitcher } from '../../features/themeSwitcher/ThemeSwitcher'
import { HeaderBtns } from './HeaderBtns'

export const Header = () => (
  <header className="data-theme">
    <h3>MoviesWaht?</h3>
    <HeaderBtns />
    <ThemeSwitcher />
  </header>
)
