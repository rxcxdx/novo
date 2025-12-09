import dayjs from 'dayjs'

export function Horario({ value }) {
  const j = dayjs(value).format('HH:mm:mm')
  return <span>{j}</span>
}
