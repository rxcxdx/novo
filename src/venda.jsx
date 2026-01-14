import JsonView from '@uiw/react-json-view'
import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherVenda } from './api'
import { Apagar } from './timeline'
import { FallbackMini } from './fallbacks'
import { ErrorBoundary } from 'react-error-boundary'

function BoxVenda({ venda }) {
  return (
    <JsonView value={venda} enableClipboard={false} displayObjectSize={false} />
  )
}

function Venda({ promise }) {
  const venda = use(promise)
  return (
    <div>
      <div>
        <Apagar
          value={[venda._id]}
        />
      </div>
      <BoxVenda venda={venda} />
    </div>
  )
}

export function VendaContainer() {
  const { vendaId } = useParams()
  const promise = fetcherVenda(vendaId)
  return (
    <div>
      <ErrorBoundary FallbackComponent={FallbackMini}>
      <Suspense fallback={<div>carregando...</div>}>
        <Venda promise={promise} />
      </Suspense>
      </ErrorBoundary>
    </div>
  )
}
