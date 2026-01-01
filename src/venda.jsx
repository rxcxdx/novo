import JsonView from '@uiw/react-json-view'
import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherVenda } from './api'

function BoxVenda({ venda }) {
  return (
    <JsonView
      value={venda}
      enableClipboard={false}
      displayObjectSize={false}
    />
  )
}

function Venda({ promise }) {
  const venda = use(promise)
  return <BoxVenda venda={venda} />
}

export function VendaContainer() {
  const { vendaId } = useParams()
  const promise = fetcherVenda(vendaId)
  return (
    <div>
      <Suspense fallback={<div>carregando...</div>}>
        <Venda promise={promise} />
      </Suspense>
    </div>
  )
}
