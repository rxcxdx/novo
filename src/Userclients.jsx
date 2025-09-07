import useSWR from 'swr'
import { fetcherUserclients } from './api'

const options = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
  revalidateIfStale: false
}

export default function Userclients() {
  const { data, isValidating, error } = useSWR(
    'userclients',
    fetcherUserclients,
    options
  )
  if (error) return <div>falhou em carregar</div>
  if (isValidating) return <div>carregando...</div>
  const lista = data.map((o) => (
    <div key={o.id}>
      {o.username} <i>{o.token}</i>
    </div>
  ))
  return lista
}
