import { Line } from "react-chartjs-2";

const estadoInicial = {
  responsive: false,
  animation: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    /*
    y: {
      ticks: { autoSkip: false, count: 2 },
      title: { display: true, text: "quantidade" },
    },
    */
    x: {
      ticks: { autoSkip: false },
      title: { display: true, text: "Hora do dia" },
    },
  },
};

export default function GraficoHoras({ payload }) {
  return (
    <div style={{ backgroundColor: "lightyellow", border: "1px dashed black" }}>
      <Line options={estadoInicial} data={{ datasets: [{ data: payload }] }} />
    </div>
  );
}
