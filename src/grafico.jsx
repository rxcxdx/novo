import { useState } from 'react'
import { fetcherGrafico } from './api'
import { Bar, BarChart, Legend, XAxis,Tooltip } from 'recharts'
import { toast } from 'sonner'
import { ISO_MONTH } from './utils'

function GraficoBarra({ docs }) {
  return (
    <div className="bg-green-100">
      <div className="text-xs">Quantidade de vendas para dia</div>
      <BarChart data={docs} width={350} height={250}>
        <Bar isAnimationActive={false} dataKey="vendas" fill="#8884d8" />
        <XAxis dataKey="dia" />
        <Legend />
        <Tooltip />
      </BarChart>
    </div>
  )
}

export function Grafico() {
  const [docs, setDocs] = useState()
  const [joker, setJoker] = useState(ISO_MONTH)
  const tarefa = async () => {
    try {
      const rs = await fetcherGrafico(joker)
      setDocs(rs)
    } catch (e) {
      toast.error(e.message)
    }
  }
  return (
    <div>
      <div className="mb-2">
        <input
          className="border w-48"
          type="month"
          value={joker}
          onChange={(evt) => setJoker(evt.target.value)}
        />
      </div>
      <div>
        <button className="border" onClick={tarefa}>
          pesquisar
        </button>
      </div>
      <br />
      {Array.isArray(docs) && <GraficoBarra docs={docs} />}
    </div>
  )
}
