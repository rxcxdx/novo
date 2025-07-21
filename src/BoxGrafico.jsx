import { useAsyncFn } from 'react-use'
import { useState } from 'react'
import { mesAtual } from './ajuda'
import Grafico from './Grafico'
import { fetchGrafico } from './api'

export default function BoxGrafico() {
  const [joker, setJoker] = useState(mesAtual)
  const [{ loading, value = [], error }, doFetch] = useAsyncFn(async () => {
    const data = await fetchGrafico(joker)
    return data
  }, [joker])
  if (error) throw error
  return (
    <div>
      <div className="row g-3 align-items-end">
        <div className="col-auto">
          <div>
            <small>Mês</small>
          </div>
          <input
            value={joker}
            onChange={(e) => setJoker(e.target.value)}
            type="month"
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary"
            onClick={() => doFetch()}
            disabled={loading}
          >
            Pesquisar
          </button>
        </div>
      </div>
      <Grafico paylod={value} />
    </div>
  )
}
