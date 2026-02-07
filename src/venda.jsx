import { ErrorBoundary, getErrorMessage } from 'react-error-boundary'
import JsonView from '@uiw/react-json-view'
import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherVenda } from './api'
import { Apagar } from './timeline'

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
        <Apagar value={[venda._id]} />
      </div>
      <BoxVenda venda={venda} />
    </div>
  )
}

function Fallback({ error }) {
  return (
    <div className="text-red-600">
      <div>ErrorMessage:</div>
      <div>{getErrorMessage(error)}</div>
    </div>
  )
}

export function VendaContainer() {
  const { vendaId } = useParams()
  const promise = fetcherVenda(vendaId)
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<div>carregando venda...</div>}>
          <Venda promise={promise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
