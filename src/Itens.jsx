import { useState, useTransition } from 'react'
import { fetcherItens } from './api'
import { ISO_DATE } from './utils'

const ESTILO_PENDING = 'text-blue-700 disabled:text-gray-300 border'

export default function Itens() {
  const [isPending, startTransition] = useTransition()
  const [docs, setDocs] = useState()
  const [isoDate, setIsoDate] = useState(ISO_DATE)

  const action = async () => {
    const rs = await fetcherItens(isoDate)
    setDocs(rs)
  }

  return (
    <div>
      <div className="flex gap-3">
        <input
          className="border w-48"
          type="date"
          value={isoDate}
          onChange={(evt) => setIsoDate(evt.target.value)}
        />
        <button
          className={ESTILO_PENDING}
          disabled={isPending}
          onClick={() => startTransition(action)}
        >
          pesquisar
        </button>
      </div>
      <br />
      {Array.isArray(docs) && (
        <div className="w-xs h-48 border-2 overflow-auto">
          {docs.map((o, i) => (
            <div key={i}>
              <span>{o.descricao}</span>
              &nbsp;
              <span className="font-bold">{o.quantidade}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
