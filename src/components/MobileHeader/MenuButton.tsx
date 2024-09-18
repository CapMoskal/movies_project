import { MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { ConfigProvider, Dropdown } from 'antd'
import { headerBtnsItems } from '../Header/headerBtnsItems'
import { NavLink } from 'react-router-dom'
import './MobileHeader.module.scss'
import { useColor } from './useColor'
import { ThemeSwitcher } from '../Header/ThemeSwitcher'
import styles from './MobileHeader.module.scss'

interface Props {
  searchSwitch: () => void
}

export const MenuButton = ({ searchSwitch }: Props) => {
  const items = headerBtnsItems.map((btn) => ({
    key: btn.to,
    label: <NavLink to={btn.to}>{btn.title}</NavLink>,
  }))

  const [textColor, backgroundColor] = useColor()

  return (
    <div className={styles['header-menu']}>
      <SearchOutlined
        onClick={searchSwitch}
        style={{ fontSize: '25px' }}
      />
      <ThemeSwitcher />
      <ConfigProvider
        theme={{
          token: {
            colorText: `${textColor}`,
            colorBgBase: `${backgroundColor}`,
          },
        }}
      >
        <Dropdown menu={{ items }} trigger={['click']}>
          <MenuOutlined style={{ fontSize: '25px' }} />
        </Dropdown>
      </ConfigProvider>
    </div>
  )
}
