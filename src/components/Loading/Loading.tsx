import { LoadingOutlined } from '@ant-design/icons'
import { ConfigProvider, Flex, Spin } from 'antd'

export const Loading = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#ff740f',
      },
    }}
  >
    <Flex align="center" gap="middle">
      <Spin
        fullscreen
        indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
      />
    </Flex>
  </ConfigProvider>
)
