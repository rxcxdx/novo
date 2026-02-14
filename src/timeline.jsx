import { Suspense, use } from 'react'
import { fetcherTimeline } from './api'
import { LinkVenda } from './indice'

function Timeline({ promise }) {
  const docs = use(promise)
  const lista = docs.map((o) => (
    <div key={o._id} className="flex gap-x-3 ">
      <LinkVenda value={o._id} />
      <span>{o.username}</span>
      <span className="font-bold">{o.obs}</span>
    </div>
  ))
  return lista
}

export function TimelineContainer() {
  const promise = fetcherTimeline()
  return (
    <div>
      <Suspense fallback={<div>carregando timeline...</div>}>
        <Timeline promise={promise} />
      </Suspense>
    </div>
  )
}
