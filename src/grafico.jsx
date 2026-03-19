import { useState, useTransition, lazy, Suspense } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { fetcherGrafico } from './api'
import { MES_ATUAL } from './utils'

const ESTILO_PENDING = 'border disabled:opacity-25'
const GraficoBarra = lazy(() => import('./GraficoBarra'));

function GraficoResposta({ docs }) {
  if (!Array.isArray(docs)) return null
  return (
    <div className="bg-green-100">
      <div>Quantidade de vendas para dia do mês</div>
      <div>{docs.length} linhas</div>
      <Suspense fallback={<div>carregando GraficoResposta</div>}>
        <GraficoBarra docs={docs} />
      </Suspense>
    </div>
  )
}

export function Grafico() {
  const [isPending, startTransition] = useTransition()
  const [docs, setDocs] = useState()
  const [state, setState] = useState(MES_ATUAL)
  const action = async () => {
    const rs = await fetcherGrafico(state)
    setDocs(rs)
  }
  return (
    <div>
      <div className="flex gap-1 items-center mb-1">
        <FaCalendarAlt />
        <input
          type="text"
          placeholder="MM/YYYY"
          value={state}
          onChange={(evt) => setState(evt.target.value)}
        />
      </div>
      <button
        className={ESTILO_PENDING}
        disabled={isPending}
        onClick={() => startTransition(action)}
      >
        pesquisar
      </button>
      <GraficoResposta docs={docs} />
    </div>
  )
}
