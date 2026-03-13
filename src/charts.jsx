import { Bar, BarChart, Legend, XAxis, Tooltip } from 'recharts'

export function GraficoBarra({ docs }) {
  return (
    <BarChart data={docs} width={350} height={250}>
      <Bar isAnimationActive={false} dataKey="vendas" fill="#8884d8" />
      <XAxis dataKey="dia" />
      <Legend />
      <Tooltip />
    </BarChart>
  )
}
