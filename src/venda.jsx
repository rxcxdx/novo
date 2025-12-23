import { darkTheme } from '@uiw/react-json-view/dark'
import Skeleton from 'react-loading-skeleton'

import JsonView from '@uiw/react-json-view'
import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherVenda } from './api'

function Venda({ vendaPromise }) {
  const venda = use(vendaPromise)
  return (
    <JsonView
      style={darkTheme}
      value={venda}
      enableClipboard={false}
      displayObjectSize={false}
    />
  )
}

export function VendaContainer() {
  const { vendaId } = useParams()
  const vendaPromise = fetcherVenda(vendaId)
  return (
    <div>
      
        <Suspense fallback={<Skeleton count={5} width='250px'/>}>
          <Venda vendaPromise={vendaPromise} />
        </Suspense>
      
    </div>
  )
}
