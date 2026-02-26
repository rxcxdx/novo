import { Bar, BarChart, Legend, XAxis, Tooltip } from 'recharts'

export default function GraficoBarra({ docs }) {
  return (
    <div className="bg-green-100">
      <div>Quantidade de vendas para dia</div>
      <div>{docs.length} linhas</div>
      <BarChart data={docs} width={350} height={250}>
        <Bar isAnimationActive={false} dataKey="vendas" fill="#8884d8" />
        <XAxis dataKey="dia" />
        <Legend />
        <Tooltip />
      </BarChart>
    </div>
  )
}
