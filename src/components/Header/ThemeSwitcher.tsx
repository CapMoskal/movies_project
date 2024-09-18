import { MoonFilled, SunFilled } from '@ant-design/icons'
import { useTheme } from '../../features/themeSwitcher/use-theme'
import styles from './Header.module.scss'

export const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme()
  const btnStyle = { color: '--colors-text', fontSize: '25px' }

  return (
    <div
      className={styles['theme-switcher-con']}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <MoonFilled style={btnStyle} />
      ) : (
        <SunFilled style={btnStyle} />
      )}
    </div>
  )
}
