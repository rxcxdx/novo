import { Suspense, use } from 'react'
import SuperVenda from './SuperVenda'
import { ErrorBoundary } from 'react-error-boundary'
import { get } from 'lodash-es'
import { fetchVenda } from './api'


function Conteudo({ vendaPromise }) {
  const venda = use(vendaPromise)
  return <SuperVenda venda={venda} />
}

function Protecao({ error }) {
  return (
    <div className="alert alert-danger">
      <div>{error.message}</div>
      <div>{get(error, 'response.data')}</div>
    </div>
  )
}


export default function Venda({ vendaId }) {
  const vendaPromise = fetchVenda(vendaId)
  return (
    <div>
      <ErrorBoundary FallbackComponent={Protecao}>
        <Suspense fallback={<div>carregando venda...</div>}>
          <Conteudo vendaPromise={vendaPromise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
