import { Link } from 'react-router'
import { truncate } from 'lodash-es'

export function LinkVenda({ value }) {
  return <Link to={'/venda/' + value}>{truncate(value, { length: 10 })}</Link>
}

export function Rolagem({docs}) {
  const lista = docs.map((o) => {
    return (
      <div key={o._id}>
        <LinkVenda value={o._id} />
        &nbsp;&nbsp;
        <span>{o.hora}</span>
        </div>
    )
  })
  return (
    <div>
      <div>tamanho: {docs.length}</div>
      <div className="w-xs bg-yellow-100 h-48 overflow-auto">
        {lista}
      </div>
    </div>
  )
}
