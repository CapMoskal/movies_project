import { headerBtnsItems } from './headerBtnsItems'
import { HeaderButton } from './HeaderButton'

export const HeaderBtns = () => (
  <div className="header-btns">
    {headerBtnsItems.map((btn) => (
      <HeaderButton key={btn.title} btn={btn} />
    ))}
  </div>
)
