import dayjs from './dayjs'

const TOKEN = 'DD/MM/YYYY HH:mm:ss.SSS'

export default function ISO({ value }) {
  const j = dayjs(value).format(TOKEN)
  return <span>{j}</span>
}
