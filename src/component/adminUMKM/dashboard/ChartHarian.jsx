import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
  datasets: [
    {
      label: "Penjualan Bulanan",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "#3653B0",
      borderWidth: 2,
      data: [
        20, 30, 60, 81, 56, 55, 90, 20, 35, 45, 60, 70, 80, 30, 45, 55, 60, 70, 75, 85, 90, 95, 80, 75, 70, 60, 50, 40, 30
      ],
    },
  ],
};


const options = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      }
    },
  },
};

const ChartHarian = () => {
  return (
    <div className="bg-white text-black p-6 rounded-lg">
      <div className="mb-1">
        <h1 className="text-xl font-bold">Keuntungan</h1>
        <p className="text-lg">Bulan Lalu</p>
        <Line height={140} data={data} options={options} />
        <h1 className="text-lg font-semibold"> 600k </h1>
      </div>
    </div>
  );
};

export default ChartHarian;
