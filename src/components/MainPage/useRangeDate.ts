const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const useRangeDays = (sub: number) => {
  const today = new Date()
  const anotherDay = new Date()

  anotherDay.setDate(today.getDate() + sub)

  return sub < 0
    ? `${formatDate(anotherDay)},${formatDate(today)}`
    : `${formatDate(today)},${formatDate(anotherDay)}`
}
