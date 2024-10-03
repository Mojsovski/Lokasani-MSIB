import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const RevenueChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    try {
      const formattedData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "User",
            data: data.pengguna,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: false,
          },
          {
            label: "Admin Event",
            data: data.adminEvent,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            fill: false,
          },
          {
            label: "Admin UMKM",
            data: data.adminUMKM,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderWidth: 2,
            fill: false,
          },

          {
            label: "Pengunjung",
            data: data.pengunjung,
            borderColor: "rgba(255, 206, 86, 1)",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderWidth: 2,
            fill: false,
          },
        ],
      };

      setChartData(formattedData);
    } catch (error) {
      console.error("Error formatting chart data:", error);
    }
  }, [data]);

  if (!chartData) {
    return <div>Loading chart...</div>;
  }

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default RevenueChart;
