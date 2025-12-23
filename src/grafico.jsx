import { useState } from 'react'
import { fetcherGrafico } from './api'
import { FormularioMes } from './formularios'
import { isEmpty } from 'lodash-es'
import { Bar, BarChart, Legend, XAxis } from 'recharts'

const borda = { border: '1px solid black' }

function GraficoBarra({ payload }) {
  if (isEmpty(payload)) return null
  return (
    <div>
      <BarChart data={payload} width={350} height={250} style={borda}>
        <Bar isAnimationActive={false} dataKey="vendas" fill="#8884d8" />
        <XAxis dataKey="dia" />
        <Legend />
      </BarChart>
    </div>
  )
}

export function BoxGrafico() {
  const [state, setState] = useState([])
  return (
    <div>
      <div>Quantidade de vendas para dia</div>
      <FormularioMes fetcher={fetcherGrafico} onSuccess={setState} />
      <GraficoBarra payload={state} />
    </div>
  )
}
