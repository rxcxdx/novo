
import { LinkVenda } from './links'
import { fetchTimeline } from './api'
import { Suspense, use } from 'react'

function Conteudo({ timelinePromise }) {
  const docs = use(timelinePromise)
  const lista = docs.map((o) => (
    <div key={o._id} className="hstack gap-3">
      <span>{o.dt}</span>
      <LinkVenda vendaId={o._id} />
      <span>{o.username}</span>
      <span className="text-danger">{o.obs}</span>
    </div>
  ))
  return (
    <div>
      <h4>Últimas 10 vendas</h4>
      {lista}
    </div>
  )
}

export default function Timeline() {
  const timelinePromise = fetchTimeline()
  return (
    <Suspense fallback={<div>carregando...</div>}>
      <Conteudo timelinePromise={timelinePromise} />
    </Suspense>
  )
}