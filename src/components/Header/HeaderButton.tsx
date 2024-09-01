import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const setStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? styles['header-btns--btn-active']
    : styles['header-btns--btn']

interface Props {
  btn: {
    to: string
    title: string
  }
}

export const HeaderButton = ({ btn }: Props) => (
  <NavLink key={btn.title} to={btn.to} className={setStyle}>
    {btn.title}
  </NavLink>
)
