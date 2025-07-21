import { useState } from 'react'
import { diaAtual } from './ajuda'
import { useAsyncFn } from 'react-use'
import { fetchRelatorio } from './api'


export default function Relatorio() {
  const [alpha, setAlpha] = useState(diaAtual)
  const [beta, setBeta] = useState(diaAtual)
  const [{ loading, value: doc = {}, error }, doFetch] =
    useAsyncFn(async () => {
      const o = await fetchRelatorio(alpha, beta)
      return o
    }, [alpha, beta])
  if (error) throw error
  return (
    <div>
      <div>
        <div className="row g-3">
          <div className="col-auto">
            <div>gte</div>
            <input
              value={alpha}
              type="date"
              onChange={(e) => setAlpha(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <div>lte</div>
            <input
              value={beta}
              type="date"
              onChange={(e) => setBeta(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              onClick={() => doFetch()}
              disabled={loading}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
      <div className="text-success">
        <div>quantidadeDeVendas: {doc.quantidadeDeVendas}</div>
        <div>itens: {doc.itens}</div>
        <div>total: {doc.total}</div>
      </div>
    </div>
  )
}
