import { useState, useTransition } from 'react'
import { fetcherRelatorio } from './api'
import JsonView from '@uiw/react-json-view'
import { DIA_ATUAL } from './utils'

const ESTILO_PENDING = 'border disabled:opacity-25'

function RelatorioResposta({ doc }) {
  if (!doc) return null
  return (
    <div className="mt-3">
      <JsonView
        value={doc}
        enableClipboard={false}
        displayObjectSize={false}
        displayDataTypes={false}
      />
    </div>
  )
}

export function Relatorio() {
  const [doc, setDoc] = useState()
  const [isPending, startTransition] = useTransition()
  const [field1, setField1] = useState(DIA_ATUAL)
  const [field2, setField2] = useState(DIA_ATUAL)
  const action = async () => {
    const o = await fetcherRelatorio(field1, field2)
    setDoc(o)
  }
  return (
    <div>
      <div className="text-xs">gte</div>
      <div>
        <input
          className="border w-48"
          type="text"
          value={field1}
          onChange={(evt) => setField1(evt.target.value)}
        />
      </div>
      <div className="text-xs">lte</div>
      <div>
        <input
          className="border w-48"
          type="text"
          value={field2}
          onChange={(evt) => setField2(evt.target.value)}
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
      <RelatorioResposta doc={doc} />
    </div>
  )
}
