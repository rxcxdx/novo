import { useState, useTransition } from 'react'
import { fetcherItens } from './api'
import { ESTILO_PENDING } from './estilos'
import { DIA_ATUAL } from './utils'

function ItensResposta({ docs }) {
  if (!Array.isArray(docs)) return null
  return (
    <div className="w-xs h-48 border overflow-auto mt-3">
      {docs.map((o, i) => (
        <div key={i}>
          <span>{o.descricao}</span>
          &nbsp;
          <span className="font-bold">{o.quantidade}</span>
        </div>
      ))}
    </div>
  )
}

export function Itens() {
  const [isPending, startTransition] = useTransition()
  const [docs, setDocs] = useState()
  const [state, setState] = useState(DIA_ATUAL)
  const action = async () => {
    const rs = await fetcherItens(state)
    setDocs(rs)
  }
  return (
    <div>
      <div className="flex gap-3">
        <input
          placeholder="DD/MM/YYYY"
          className="border w-48"
          type="text"
          value={state}
          onChange={(evt) => setState(evt.target.value)}
        />
        <button
          className={ESTILO_PENDING}
          disabled={isPending}
          onClick={() => startTransition(action)}
        >
          pesquisar
        </button>
      </div>
      <ItensResposta docs={docs} />
    </div>
  )
}
