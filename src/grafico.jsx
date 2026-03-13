import { useState, useTransition } from 'react'
import { fetcherGrafico } from './api'
import { ESTILO_PENDING } from './estilos'
import { GraficoBarra } from './charts'
import { MES_ATUAL } from './utils'

function GraficoResposta({ docs }) {
  if (!Array.isArray(docs)) return null
  return (
    <div className="bg-green-100">
      <div>Quantidade de vendas para dia do mês</div>
      <div>{docs.length} linhas</div>
      <GraficoBarra docs={docs} />
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
      <div className="flex gap-3">
        <input
          className="border w-48"
          type="text"
          placeholder="MM/YYYY"
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
      <br />
      <GraficoResposta docs={docs} />
    </div>
  )
}
