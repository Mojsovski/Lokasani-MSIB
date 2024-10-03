import React from "react";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import CardUser from "../../../component/superadmin/globalComponent/CardUser";
import CardVerifikasi from "../../../component/superadmin/dataUser/CardVerifikasi";
import { Bar } from "react-chartjs-2";

const DataUser = () => {
  const usersData = [
    { name: "Pengguna", quantity: 10, link: "/superAdmin/daftarpengguna" },
    { name: "Admin Event", quantity: 15, link: "/superAdmin/daftaradminevent" },
    { name: "Admin UMKM", quantity: 8, link: "/superAdmin/daftaradminumkm" },
  ];

  const totalQuantity = usersData.reduce(
    (total, user) => total + user.quantity,
    0
  );

  const chartData = {
    labels: [...usersData.map((user) => user.name), "Total"],
    datasets: [
      {
        label: "Quantity",
        data: [...usersData.map((user) => user.quantity), totalQuantity],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(0, 0, 0, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 1,
        barThickness: 10,
      },
    ],
  };

  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="DATA USER" />
      <div className="px-4 py-28 sm:ml-[266px] flex flex-col gap-20 ">
        <div className="grid w-full gap-6 px-10 md:grid-cols-3">
          {usersData.map((pengguna, index) => (
            <CardUser
              key={index}
              name={pengguna.name}
              link={pengguna.link}
              quantity={pengguna.quantity}
              showCardButton={true}
            />
          ))}
        </div>
        <div className="flex w-full gap-6 px-10 ">
          <div className="w-[800px] rounded-lg bg-white">
            <Bar
              data={chartData}
              options={{
                scales: {
                  x: {
                    beginAtZero: true,
                  },
                },
                indexAxis: "y",
              }}
            />
          </div>
          <div className="w-[400px]">
            <CardVerifikasi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataUser;
