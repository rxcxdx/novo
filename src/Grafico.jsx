import { useState, useTransition } from 'react'
import { fetcherGrafico } from './api'
import { ISO_MONTH } from './utils'
import GraficoBarra from './GraficoBarra'

const ESTILO_PENDING = 'text-blue-700 disabled:text-gray-300 border'

export default function Grafico() {
  const [isPending, startTransition] = useTransition()
  const [docs, setDocs] = useState()
  const [isoMonth, setIsoMonth] = useState(ISO_MONTH)
  const action = async () => {
    const rs = await fetcherGrafico(isoMonth)
    setDocs(rs)
  }
  return (
    <div>
      <div className="flex gap-3">
        <input
          className="border w-48"
          type="month"
          value={isoMonth}
          onChange={(evt) => setIsoMonth(evt.target.value)}
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
      {Array.isArray(docs) && <GraficoBarra docs={docs} />}
    </div>
  )
}
