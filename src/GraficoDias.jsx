import { Bar } from "react-chartjs-2";

const options = {
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
      title: { display: true, text: "Dia do mês" },
    },
  },
};

export default function GraficoDias({ payload }) {
  return (
    <div style={{ backgroundColor: "lightyellow", border: "1px dashed black" }}>
      <Bar options={options} data={{ datasets: [{ data: payload }] }} />
    </div>
  );
}
