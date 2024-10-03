import { Line } from "react-chartjs-2";

const ChartPenghasilan = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Pembayaran",
                data: [1000, 1500, 1200, 1700, 1300, 1600, 1100, 1900, 1400, 1800, 2000, 1700],
                fill: false,
                borderColor: "#3377FF",
                borderWidth: 2,
            },
            {
                label: "Pengeluaran",
                data: [800, 1200, 900, 1500, 1000, 1300, 850, 1600, 1100, 1400, 1500, 1300],
                fill: false,
                borderColor: "#E8644B",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: false,
            },
            y: {
                stacked: false,
                grid: {
                    display: false,
                }
            },
        },
    };

    return (
        <div className="w-full rounded-lg bg-white p-6">
            <h2 className="text-xl font-bold">Penghasilan</h2>
            <Line height={185} data={data} options={options} />
        </div>
    );
};

export default ChartPenghasilan;
