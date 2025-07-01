import axios from 'axios'
import { SyncLoader } from 'react-spinners'
import { useAsync } from 'react-use'
import { LinkVenda } from './links'
import delay from 'delay'
import { ImWarning } from '@react-icons/all-files/im/ImWarning'
import check from 'check-types'

function Obs({ payload }) {
  if (check.not.string(payload)) return <ImWarning title='não é string' />
  return <small className="text-danger">{payload}</small>
}

export default function Timeline() {
  const { value, loading, error } = useAsync(async () => {
    await delay(500)
    const response = await axios('/ws/timeline')
    return response.data
  })
  if (error) throw error
  if (loading) return <SyncLoader />
  const lista = value.map((o) => (
    <div key={o._id} className="hstack gap-3">
      <span>{o.dt}</span>
      <LinkVenda vendaId={o._id} />
      <Obs payload={o.obs} />
    </div>
  ))
  return (
    <div>
      <h4>Últimas 10 vendas</h4>
      {lista}
    </div>
  )
}