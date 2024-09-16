import { MenuOutlined } from '@ant-design/icons'
import { ConfigProvider, Dropdown } from 'antd'
import { headerBtnsItems } from '../Header/headerBtnsItems'
import { NavLink } from 'react-router-dom'
import './MobileHeader.module.scss'
import { useColor } from './useColor'
import { ThemeSwitcher } from '../Header/ThemeSwitcher'
import styles from './MobileHeader.module.scss'

export const MenuButton = () => {
  const items = headerBtnsItems.map((btn) => ({
    key: btn.to,
    label: <NavLink to={btn.to}>{btn.title}</NavLink>,
  }))

  const [textColor, backgroundColor] = useColor()

  return (
    <div className={styles['header-menu']}>
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
          <MenuOutlined style={{ fontSize: '20px' }} />
        </Dropdown>
      </ConfigProvider>
    </div>
  )
}
