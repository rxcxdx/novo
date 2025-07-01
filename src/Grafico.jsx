
import { Bar } from 'react-chartjs-2'

const options = {
  animation: false,
  scales: {
    x: {
      ticks: { autoSkip: false },
      title: { display: true, text: 'Dia do mês' }
    }
  }
}



export default function Grafico({ paylod }) {
  return (
    <div className='border border-dark my-3 p-3' style={{ width: '600px', height: '300px'}}>
      <Bar
      options={options}
      data={{
        datasets: [


          {
            data: paylod,
            label: 'quantidadeDeVendas',
            parsing: { xAxisKey: 'dia', yAxisKey: 'quantidadeDeVendas' }
          },

          {
            data: paylod,
            label: 'itens',
            parsing: { xAxisKey: 'dia', yAxisKey: 'itens' }
          },

          {
            data: paylod,
            label: 'total',
            parsing: { xAxisKey: 'dia', yAxisKey: 'total' }
          }


        ]
      }}
    />
    </div>
  )
}
