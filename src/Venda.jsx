import { useLoaderData } from 'react-router'
import JsonView from '@uiw/react-json-view'
import BtnApagarVenda from './BtnApagarVenda'
import EditarDt from './EditarDt'
import ISO from './ISO'

export default function Venda() {
  const venda = useLoaderData()
  return (
    <div>
      <div>
        <ISO value={venda.dt} />
      </div>
      <div className="border overflow-auto">
        <JsonView
          value={venda}
          enableClipboard={false}
          displayObjectSize={false}
        />
      </div>
      <br />
      <EditarDt _id={venda._id} dt={venda.dt} />
      <br />
      <div>
        <BtnApagarVenda value={venda._id} />
      </div>
    </div>
  )
}
