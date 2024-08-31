import { NavLink } from 'react-router-dom'

interface Props {
  btn: {
    to: string
    title: string
  }
}

export const HeaderButton = ({ btn }: Props) => (
  <NavLink key={btn.title} to={btn.to} className="header-btns--btn">
    {btn.title}
  </NavLink>
)
