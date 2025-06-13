import { Bar } from "react-chartjs-2";
import { useMount, useUnmount } from "react-use";

const options = {
  parsing: {
    xAxisKey: "dia",
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

// payload SEMPRE EXISTE
export default function Grafico({ payload }) {
  useMount(() => console.log("MOUNTED Grafico "));
  useUnmount(() => console.log("UNMOUNTED Grafico"));
  return (
    <Bar
      options={options}
      data={{
        datasets: [
          {
            data: payload,
            label: "quantVendas",
            parsing: { yAxisKey: "quantVendas" },
          },
          {
            hidden: true,
            data: payload,
            label: "itens",
            parsing: { yAxisKey: "itens" },
          },
          {
            hidden: true,
            data: payload,
            label: "total",
            parsing: { yAxisKey: "total" },
          },
        ],
      }}
    />
  );
}
