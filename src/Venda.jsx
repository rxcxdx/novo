import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherVenda } from './api'
import BoxVenda from './BoxVenda'
import BoxItem from './BoxItem'
import { ErrorBoundary } from 'react-error-boundary'
import { ProtecaoBasic } from './fallbacks'

function Conteudo({ vendaPromise }) {
  const venda = use(vendaPromise)
  const lista = venda.cart.map((o) => (
    <div key={o.identifier} style={{ marginBottom: '1rem' }}>
      <BoxItem item={o} />
    </div>
  ))
  return (
    <div>
      <BoxVenda venda={venda} />
      <br />
      {lista}
    </div>
  )
}

export default function Venda() {
  const { vendaId } = useParams()
  const vendaPromise = fetcherVenda(vendaId)
  return (
    <div>
      <ErrorBoundary FallbackComponent={ProtecaoBasic}>
        <Suspense fallback={<div>carregando venda...</div>}>
          <Conteudo vendaPromise={vendaPromise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
