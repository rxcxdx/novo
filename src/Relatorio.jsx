import { useState, useTransition } from 'react'
import { fetcherRelatorio } from './api'
import JsonView from '@uiw/react-json-view'
import { ISO_DATE } from './utils'

const ESTILO_PENDING = 'text-blue-700 disabled:text-gray-300 border'

export default function Relatorio() {
  const [state, setState] = useState()
  const [isPending, startTransition] = useTransition()
  const [a, setA] = useState(ISO_DATE)
  const [b, setB] = useState(ISO_DATE)
  const [c, setC] = useState('')

  const action = async () => {
    const o = await fetcherRelatorio(a, b, c)
    setState(o)
  }

  return (
    <div>
      <div className="text-xs">gte</div>
      <div>
        <input
          className="border w-48"
          type="date"
          value={a}
          onChange={(evt) => setA(evt.target.value)}
        />
      </div>
      <div className="text-xs">lte</div>
      <div>
        <input
          className="border w-48"
          type="date"
          value={b}
          onChange={(evt) => setB(evt.target.value)}
        />
      </div>
      <div className="text-xs">username</div>
      <div>
        <input
          className="border w-48"
          type="text"
          value={c}
          onChange={(evt) => setC(evt.target.value)}
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
