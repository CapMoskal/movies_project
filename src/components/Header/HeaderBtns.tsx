import { headerBtnsItems } from './headerBtnsItems'
import { HeaderButton } from './HeaderButton'
import styles from './Header.module.scss'

export const HeaderBtns = () => (
  <div className={styles['header-btns']}>
    {headerBtnsItems.map((btn) => (
      <HeaderButton key={btn.title} btn={btn} />
    ))}
  </div>
)
