import dayjs from './dayjs.js'

export default function VendaDt({ value }) {
  return (
    <span className="text-lg">
      {dayjs(value).format('DD/MM/YYYY HH:mm:ss.SSS')}
    </span>
  )
}
