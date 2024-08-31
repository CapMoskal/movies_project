import { MoonFilled, SunFilled } from '@ant-design/icons'
import { useTheme } from './use-theme'

export const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme()
  const btnStyle = { color: '--colors-text', fontSize: '22px' }

  return (
    <div className="theme-switcher-con" onClick={toggleTheme}>
      {theme === 'light' ? (
        <MoonFilled style={btnStyle} />
      ) : (
        <SunFilled style={btnStyle} />
      )}
    </div>
  )
}

// сделать модальные стили
// индекс стилей сделать сасс
// настроить стиль кнопок в хедере
