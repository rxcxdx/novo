import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherVenda } from './api'
import { ErrorBoundary } from 'react-error-boundary'
import { BoxError } from './fallbacks'

function BoxVenda({ venda }) {
  return (
    <div className="w-xs bg-stone-700 text-white p-1">
      <div>id: {venda._id}</div>
      <div>dt: {venda.dt}</div>
      <div>username: {venda.username}</div>
      <div>obs: {venda.obs}</div>
      <div>total: {venda.total}</div>
      <div>itens: {venda.itens}</div>
    </div>
  )
}

function BoxItem({ item }) {
  return (
    <div>
      <div>identifier: {item.identifier}</div>
      <div>descricao: {item.descricao}</div>
      <div>valor: {item.valor}</div>
      <div>quantidade: {item.quantidade}</div>
      <div>obs: {item.obs}</div>
    </div>
  )
}

function Venda({ vendaPromise }) {
  const venda = use(vendaPromise)
  const cart = venda.cart.map((o) => (
    <div key={o.identifier} className="mb-3">
      <BoxItem item={o} />
    </div>
  ))
  return (
    <div>
      <BoxVenda venda={venda} />
      <br />
      {cart}
    </div>
  )
}

export function VendaContainer() {
  const { vendaId } = useParams()
  const vendaPromise = fetcherVenda(vendaId)
  return (
    <div>
      <ErrorBoundary FallbackComponent={BoxError}>
        <Suspense fallback={<div>carregando venda...</div>}>
          <Venda vendaPromise={vendaPromise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
