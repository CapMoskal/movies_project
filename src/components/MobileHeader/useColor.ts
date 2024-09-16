import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TRootState } from '../../store'

export const useColor = () => {
  const themeSwitch = useSelector((state: TRootState) => state.theme)

  const [backgroundColor, setBackgroundColor] = useState('')
  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    const bodyStyles = getComputedStyle(document.body)
    const bgColor = bodyStyles.getPropertyValue('--colors-bg').trim()
    const txtColor = bodyStyles
      .getPropertyValue('--colors-text')
      .trim()

    setTextColor(txtColor)
    setBackgroundColor(bgColor)
  }, [themeSwitch])

  return [textColor, backgroundColor]
}
