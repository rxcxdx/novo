import JsonView from '@uiw/react-json-view'
import { Suspense, use } from 'react'
import { useParams } from 'react-router'
import { fetcherVenda } from './api'
import BtnVendaApagar from './BtnVendaApagar'
import EditarDt from './EditarDt'
import VendaDt from './VendaDt'

function Venda({ promise }) {
  const venda = use(promise)
  return (
    <div>
      <VendaDt value={venda.dt} />
      <div className="mb-1">
        <BtnVendaApagar _id={venda._id} />
      </div>

      <EditarDt _id={venda._id} dt={venda.dt} />
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
      <Suspense fallback={<div>carregando venda...</div>}>
        <Venda promise={promise} />
      </Suspense>
    </div>
  )
}
