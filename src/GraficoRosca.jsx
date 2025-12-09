import { isEmpty } from 'lodash-es'
import { Cell, Legend, Pie, PieChart } from 'recharts'

const borda = { border: '1px dashed black' }

export default function GraficoRosca({ payload }) {
  if (isEmpty(payload)) return null
  return (
    <div>
      <div>inicio: {payload.inicio}</div>
      <div>fim: {payload.fim}</div>
      <div>linhas: {payload.linhas}</div>

      <PieChart data={payload.docs} width={350} height={250} style={borda}>
        <Pie
          isAnimationActive={false}
          dataKey="vendas"
          nameKey="username"
          label
        >
          {payload.docs.map((o, i) => (
            <Cell key={i} fill={o.cor} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  )
}
