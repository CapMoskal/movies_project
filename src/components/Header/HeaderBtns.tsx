import { headerBtnsItems } from './headerBtnsItems'
import { HeaderButton } from './HeaderButton'
import styles from './Header.module.scss'
import { SearchOutlined } from '@ant-design/icons'

interface Props {
  searchSwitch: () => void
}

export const HeaderBtns = ({ searchSwitch }: Props) => (
  <div className={styles['header-btns']}>
    {headerBtnsItems.map((btn) => (
      <HeaderButton key={btn.title} btn={btn} />
    ))}
    <SearchOutlined
      onClick={searchSwitch}
      className={styles['header-btns--btn']}
    />
  </div>
)
