import { useState, useTransition } from 'react'
import { fetcherRelatorio } from './api'
import JsonView from '@uiw/react-json-view'
import { ISO_DATE } from './utils'

const ESTILO_PENDING = 'text-blue-700 disabled:text-gray-300 border'

const estadoInicial = { gte: ISO_DATE, lte: ISO_DATE }

export default function Relatorio() {
  const [state, setState] = useState()
  const [isPending, startTransition] = useTransition()
  const [formulario, setFormulario] = useState(estadoInicial)
  const action = async () => {
    const o = await fetcherRelatorio(formulario)
    setState(o)
  }
  return (
    <div>
      <div className="text-xs">gte</div>
      <div>
        <input
          className="border w-48"
          type="date"
          value={formulario.gte}
          onChange={(evt) =>
            setFormulario({ ...formulario, gte: evt.target.value })
          }
        />
      </div>
      <div className="text-xs">lte</div>
      <div>
        <input
          className="border w-48"
          type="date"
          value={formulario.lte}
          onChange={(evt) =>
            setFormulario({ ...formulario, lte: evt.target.value })
          }
        />
      </div>
      <div className="mt-2">
        <button
          onClick={() => startTransition(action)}
          className={ESTILO_PENDING}
          disabled={isPending}
        >
          pesquisar
        </button>
      </div>
      <br />
      {state && (
        <JsonView
          value={state}
          enableClipboard={false}
          displayObjectSize={false}
          displayDataTypes={false}
        />
      )}
    </div>
  )
}
