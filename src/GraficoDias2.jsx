import { Bar } from "react-chartjs-2";

const options = {
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

export default function GraficoDias2({ payload }) {
  return (
    <Bar
      options={options}
      data={{
        datasets: [
          {
            data: payload,
            label: "total_R$",
          },
        ],
      }}
    />
  );
}
