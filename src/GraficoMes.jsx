import { Bar } from "react-chartjs-2";

const options = {
  parsing: {
    xAxisKey: 'dia',
  },
  animation: false,
  scales: {
    y: {
      ticks: { autoSkip: false, count: 2 },
    },
    x: {
      ticks: { autoSkip: false },
      title: { display: true, text: "Dia do mês" },
    },
  },
};

export default function GraficoMes({ payload }) {
  return (
    <Bar
      options={options}
      data={{
        datasets: [
          { data: payload, label: 'quantVendas', parsing: { yAxisKey: 'quantVendas' } },
          { data: payload, label: 'itens', parsing: { yAxisKey: 'itens' } },
          { data: payload, label: 'total_R$', parsing: { yAxisKey: 'total' } }
        ],
      }}
    />
  );
}
