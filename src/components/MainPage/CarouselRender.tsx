import { Carousel } from 'antd'
import styles from './MainPage.module.scss'

export const CarouselRender = () => {
  const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }
  return (
    <>
      <Carousel className={styles['carousel']} autoplay>
        <div>
          <div style={contentStyle}>
            <h1>1</h1>
            <h1>2</h1>
          </div>
        </div>
      </Carousel>
    </>
  )
}
