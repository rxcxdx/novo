import { ErrorBoundary } from 'react-error-boundary'
import JsonView from '@uiw/react-json-view'
import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherVenda } from './api'
import BtnVendaApagar from './BtnVendaApagar'
import Fallback from './Fallback'

function Venda({ promise }) {
  const venda = use(promise)
  return (
    <div>
      <div>
        <BtnVendaApagar _id={venda._id} />
      </div>
      <br />
      <div className="border overflow-auto">
        <JsonView
          value={venda}
          enableClipboard={false}
          displayObjectSize={false}
        />
      </div>
    </div>
  )
}

export function VendaContainer() {
  const { _id } = useParams()
  const promise = fetcherVenda(_id)
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
