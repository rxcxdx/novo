import { isEmpty } from 'lodash-es'
import { Bar, BarChart, Legend, XAxis } from 'recharts'

const borda = { border: '1px dashed black' }

export default function GraficoBarra({ payload }) {
  if (isEmpty(payload)) return null
  return (
    <div>
      <div>inicio: {payload.inicio}</div>
      <div>fim: {payload.fim}</div>
      <div>linhas: {payload.linhas}</div>
      <BarChart data={payload.docs} width={350} height={250} style={borda}>
        <Bar isAnimationActive={false} dataKey="vendas" fill="#8884d8" />
        <XAxis dataKey="dia" />
        <Legend />
      </BarChart>
    </div>
  )
}
