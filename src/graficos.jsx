import { Bar, BarChart, Cell, Legend, Pie, PieChart, XAxis } from 'recharts'

const borda = { border: '1px dashed black' }

export function GraficoBarra({ dataSource }) {
  return (
    <BarChart data={dataSource} width={500} height={250} style={borda}>
      <Bar isAnimationActive={false} dataKey="vendas" fill="#8884d8" />
      <XAxis dataKey="dia" />
      <Legend />
    </BarChart>
  )
}

export function GraficoRosca({ dataSource }) {
  return (
    <PieChart data={dataSource} width={400} height={250} style={borda}>
      <Pie isAnimationActive={false} dataKey="vendas" nameKey="username" label>
        {dataSource.map((o, i) => (
          <Cell key={i} fill={o.cor} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  )
}
