import { Suspense, use } from 'react'
import { fetcherTimelineVendas } from './api'
import TabelaTimelineVendas from './TabelaTimelineVendas'

function TimelineVendasConteudo({ promise }) {
  const dataSource = use(promise)
  return <TabelaTimelineVendas dataSource={dataSource} />
}

export default function TimelineVendas() {
  const promise = fetcherTimelineVendas()
  return (
    <div>
      <Suspense fallback={<div>carregando timeline vendas...</div>}>
        <TimelineVendasConteudo promise={promise} />
      </Suspense>
    </div>
  )
}
