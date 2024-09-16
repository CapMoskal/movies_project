import { headerBtnsItems } from './headerBtnsItems'
import { HeaderButton } from './HeaderButton'
import styles from './Header.module.scss'
import { SearchOutlined } from '@ant-design/icons'

export const HeaderBtns = () => (
  <div className={styles['header-btns']}>
    {headerBtnsItems.map((btn) => (
      <HeaderButton key={btn.title} btn={btn} />
    ))}
    <SearchOutlined className={styles['header-btns--btn']} />
  </div>
)
