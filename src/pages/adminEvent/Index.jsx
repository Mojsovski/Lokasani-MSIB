/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Sidebar from "../../component/adminEvent/Sidebar";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import user from "../../assets/img/user.svg";
import TransactionIcon from "../../assets/icon/transaction.svg";
import StatusUp from "../../assets/icon/status-up.svg";
import PersonalCard from "../../assets/icon/personalcard.svg";
import MoneyNotifIcon from "@mui/icons-material/MonetizationOnRounded";
import Receipt from "../../assets/icon/receipt.svg";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";

function Index() {
  // Notification Popup
  const [notifPopup, setNotifPopup] = useState(false);
  const notificationRef = useRef(null);
  const toggleNotifPopup = () => {
    setNotifPopup(!notifPopup);
  };

  const chartContainer = useRef(null);
  useEffect(() => {
    let myChart;

    const generateRandomData = () => {
      return Math.floor(Math.random() * (85 - 15 + 1) + 15);
    };

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dataValues = Array.from({ length: 12 }, () => generateRandomData());

    // Modifikasi dataValues untuk memastikan nilai berada dalam rentang 15-85
    const adjustedDataValues = dataValues.map((value) =>
      Math.floor(Math.min(Math.max(value, 15), 85))
    );

    const ctx = chartContainer.current.getContext("2d");

    myChart = new Chart(ctx, {
      type: "line", // Mengubah tipe grafik menjadi 'line'
      data: {
        labels: months,
        datasets: [
          {
            label: "Revenue",
            data: adjustedDataValues,
            borderColor: "#3653B0", // Warna garis
            borderWidth: 2, // Lebar garis
            fill: false, // Tidak mengisi area di bawah garis
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <section>
      <Sidebar />

      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        {/* header start */}
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className="pl-5">
            <h1 className="text-[48px] font-bold">Home</h1>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex mr-16 gap-x-6 relative">
                <a className="cursor-pointer">
                  <TextsmsIcon className="text-[#253E8D]" />
                </a>
                <a className="cursor-pointer" onClick={toggleNotifPopup}>
                  <NotificationsActiveIcon className="text-[#253E8D]" />
                </a>

                {/* Notification start */}
                {notifPopup && (
                  <div className="absolute z-50 bg-white shadow-2xl w-[520px] h-[465px] right-0 px-5 z-20 mt-10 rounded-[12px] pb-10 pt-8 mr-10">
                    <div className="z-50 bg-white">
                      <div className="flex justify-between relative">
                        <h1 className="text-4xl font-semibold">Notifikasi</h1>
                        <CloseIcon
                          fontSize="large"
                          className="cursor-pointer"
                          onClick={() => {
                            setNotifPopup(!notifPopup);
                          }}
                        />
                      </div>
                      <div className="mt-6">
                        <a
                          href=""
                          className="border-b-4 border-indigo-500 px-4 mr-3 py-2"
                        >
                          Terbaru
                        </a>
                        <a
                          href=""
                          className="border-b-4 border-indigo-500 px-4 mr-3 py-2"
                        >
                          Transaksi
                        </a>
                        <a
                          href=""
                          className="border-b-4 border-indigo-500 px-4 mr-3 py-2"
                        >
                          Info
                        </a>
                      </div>
                      <div className="mt-4 overflow-y-auto overflow-hidden h-[310px]">
                        <div className="pl-12 relative pr-5 mt-2">
                          <div className="flex justify-between">
                            <InfoIcon
                              className="absolute left-0 ml-1 text-[#3653B0]"
                              fontSize="large"
                            />
                            <h1 className="text-[#999999] text-sm">Info</h1>
                            <h1 className="text-[#999999] text-sm">5 Jam</h1>
                          </div>
                          <div>
                            <h1 className="font-semibold text-lg">
                              Kini Lokasani Creator Hadir dalam Tampilan Baru
                            </h1>
                            <p>
                              Cek tampilan halaman akun lokasani yuk! Fitur
                              history hadir untuk melihat transaksi terakhirmu.
                              Makin nyaman bertransaksi bersama Lokasani
                            </p>
                          </div>
                        </div>
                        <div className="pl-12 relative pr-5 mt-2">
                          <div className="flex justify-between">
                            <MoneyNotifIcon
                              className="absolute left-0 ml-1 text-[#3653B0]"
                              fontSize="large"
                            />
                            <h1 className="text-[#999999] text-sm">
                              Transaksi
                            </h1>
                            <h1 className="text-[#999999] text-sm">5 Jam</h1>
                          </div>
                          <div>
                            <h1 className="font-semibold text-lg">
                              Kini Lokasani Creator Hadir dalam Tampilan Baru
                            </h1>
                            <p>
                              Cek tampilan halaman akun lokasani yuk! Fitur
                              history hadir untuk melihat transaksi terakhirmu.
                              Makin nyaman bertransaksi bersama Lokasani
                            </p>
                          </div>
                        </div>
                        <div className="pl-12 relative pr-5 mt-2">
                          <div className="flex justify-between">
                            <InfoIcon
                              className="absolute left-0 ml-1 text-[#3653B0]"
                              fontSize="large"
                            />
                            <h1 className="text-[#999999] text-sm">Info</h1>
                            <h1 className="text-[#999999] text-sm">5 Jam</h1>
                          </div>
                          <div>
                            <h1 className="font-semibold text-lg">
                              Kini Lokasani Creator Hadir dalam Tampilan Baru
                            </h1>
                            <p>
                              Cek tampilan halaman akun lokasani yuk! Fitur
                              history hadir untuk melihat transaksi terakhirmu.
                              Makin nyaman bertransaksi bersama Lokasani
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Notification end */}
                <a>
                  <img
                    className="w-6 h-6 rounded-full"
                    src={user}
                    alt="Rounded avatar"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* header end */}

        {/* content start */}
        <div className="bg-gray-100">
          <div className="bg-gray-100 flex items-center justify-between rounded-sm  ">
            <div className="pl-1 flex items-center">
              <button className="bg-white text-black py-1 px-4 rounded-md m-2 flex items-center gap-x-1">
                <CalendarTodayIcon fontSize="small" />
                Hari ini
              </button>
              <h1 className="text-slate-500 font-semibold">Hari ini</h1>
            </div>

            <div className="flex items-center">
              <div className="flex justify-end items-center mr-2">
                <h1 className="font-semibold text-[18px] mr-1">Tampilkan</h1>
                <select className="bg-white text-[#999999] p-1 px-2 py-2 rounded-md outline outline-black outline-1 ml-2">
                  <option>Data Terbaru</option>
                  <option>Filter 2</option>
                </select>
              </div>
              <div className="flex items-center">
                <FileDownloadIcon
                  fontSize="small"
                  className="ml-5 text-white absolute"
                />
                <select className="bg-[#243775] text-white py-2 px-4 pl-10 rounded-md m-2 flex items-center">
                  <option
                    className="bg-white text-black"
                    hidden
                    disabled
                    selected
                  >
                    Export Sebagai
                  </option>
                  <option className="bg-white text-black">Excel (.xls)</option>
                  <option className="bg-white text-black">Pdf (.pdf)</option>
                </select>
              </div>
            </div>
          </div>

          {/* grid */}
          <div className="grid grid-cols-5 gap-3 p-2">
            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#C1533E] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <img src={TransactionIcon} alt="" className="w-7" />
                </button>
                <div className="flex flex-col justify-between">
                  <div className="absolute left-2 top-1/2 bg-[#C1533E] mt-4 w-1 h-12 transform -translate-y-1/2"></div>
                  <div className="mt-14">
                    <span className="text-[#999999] text-sm mt-10">
                      Total Pemasukan (Rp)
                    </span>
                    <br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">
                      35.440.000
                    </span>
                    <br />
                    <div className="text-sm flex items-center">
                      <ArrowUpwardIcon className="text-green-500" />
                      <span className="text-[#5CB85C]">+2%</span>
                      <span className="text-[#999999] ml-1">
                        dari bulan lalu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#EE8A77] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <img src={StatusUp} alt="" className="w-7" />
                </button>
                <div className="flex flex-col  justify-between">
                  <div className="absolute left-2 top-1/2 bg-[#EE8A77] mt-4 w-1 h-12 transform -translate-y-1/2"></div>
                  <div className="mt-14">
                    <span className="text-[#999999] text-sm mt-10">
                      Profit (%)
                    </span>
                    <br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">
                      35.440.000
                    </span>
                    <div className="text-sm flex items-center">
                      <ArrowUpwardIcon className="text-[#FFCC00]" />
                      <span className="text-[#FFCC00]">+2%</span>
                      <span className="text-[#999999] ml-1">
                        dari bulan lalu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <div className="flex flex-col justify-between">
                  <div className="absolute left-2 top-1/2 bg-[#243775] w-1 h-12 transform -translate-y-1/2"></div>
                  <span className="text-[#999999] text-sm">
                    Tiket Terjual (pcs)
                  </span>
                  <span className="text-lg font-bold text-sm font-plus-jakarta-sans">
                    5.264
                  </span>
                  <div className="text-sm flex items-center">
                    <ArrowUpwardIcon
                      fontSize="small"
                      className="text-[#5CB85C]"
                    />
                    <span className="text-[#5CB85C]">+2%</span>
                    <span className="text-[#999999] ml-1">dari bulan lalu</span>
                  </div>
                </div>
              </div>

              <div className="col-span-4 sm:col-span-4 md:col-span-1 bg-white p-4 rounded-md relative">
                <div className="flex flex-col justify-between">
                  <div className="absolute left-2 top-1/2 bg-[#8D93A5] w-1 h-12 transform -translate-y-1/2"></div>
                  <span className="text-[#999999] text-sm">
                    Merch Terjual (pcs)
                  </span>
                  <span className="text-lg font-bold text-sm font-plus-jakarta-sans">
                    352
                  </span>
                  <div className="text-sm flex items-center">
                    <ArrowUpwardIcon
                      fontSize="small"
                      className="text-[#FF3B3B]"
                    />
                    <span className="text-[#FF3B3B]">+2%</span>
                    <span className="text-[#999999] ml-1">dari bulan lalu</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#026C52] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <img src={PersonalCard} className="w-7" alt="" />
                </button>
                <div className="flex flex-col  justify-between mt-8">
                  <div className="absolute left-2 top-1/2 bg-[#026C52] mt-5 w-1 h-12 transform -translate-y-1/2"></div>
                  <div className="mt-8">
                    <span className="text-[#999999] text-sm">Pengunjung</span>
                    <br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">
                      15.600
                    </span>
                    <div className="text-sm flex items-center">
                      <ArrowUpwardIcon className="text-green-500" />
                      <span className="text-[#5CB85C]">+2%</span>
                      <span className="text-[#999999] ml-1">
                        dari bulan lalu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <button className="bg-[#768DD5] text-white py-1 px-1 rounded-full absolute top-2 left-2 m-2 flex items-center">
                  <img src={Receipt} className="w-7" alt="" />
                </button>
                <div className="flex flex-col  justify-between mt-8">
                  <div className="absolute left-2 top-1/2 bg-[#768DD5] mt-5 w-1 h-12 transform -translate-y-1/2"></div>
                  <div className="mt-8">
                    <span className="text-[#999999] text-sm ">
                      Struk pembayaran
                    </span>
                    <br />
                    <span className="text-lg font-bold text-sm font-plus-jakarta-sans">
                      8.500
                    </span>
                    <div className="text-sm flex items-center">
                      <ArrowUpwardIcon className="text-green-500" />
                      <span className="text-[#5CB85C]">+2%</span>
                      <span className="text-[#999999] ml-1">
                        dari bulan lalu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5 p-2">
            <div className="w-4/6 bg-white rounded-md p-2">
              <div>
                <h1 className="text-3xl font-bold">Revenue</h1>
                <div className="flex flex-col items-end text-sm">
                  <div className="relative flex">
                    <CalendarTodayIcon
                      className="absolute ml-2 mt-2"
                      fontSize="small"
                    />
                    <select className="bg-[#F2F2F2] text-[#333333] p-1 rounded-md border-black mb-2 mr-4 py-3 px-4 pl-8">
                      <option>Perbulan</option>
                      <option>January</option>
                      <option>February</option>
                      <option>Maret</option>
                      <option>April</option>
                      <option>Mei</option>
                      <option>Juni</option>
                      <option>Juli</option>
                      <option>Agustus</option>
                      <option>September</option>
                      <option>Oktober</option>
                      <option>November</option>
                      <option>Desember</option>
                    </select>
                  </div>
                  <canvas
                    ref={chartContainer}
                    id="revenueChart"
                    width="100"
                    height="50"
                  ></canvas>
                </div>
              </div>
            </div>
            <div className="bg-white w-2/6 p-5 flex flex-col space-y-2 items-center items-center rounded-md ">
              <h1 className="text-3xl font-bold text-start">Help Center</h1>
              <span className="text-[#999999] ml-1 text-sm">
                Cari tahu jawaban di sini!
              </span>
              <div className="bg-white p-1  flex flex-col space-y-2 pt-20 items-center justify-center rounded-md p-2 items-center">
                <style>
                  {`
                    .custom-button {
                        background-color: #3653B0;
                        color: white;
                        padding: 10px;
                        margin: 10px;
                        border-radius: 25px; 
                        width: 150px;
                        heght: 70px
                    }
                `}
                </style>
                <div className="flex flex-row space-x-1 h-[100px]">
                  <button className="custom-button ">FAQ</button>
                  <button className="custom-button">Baca Artikel</button>
                </div>
                <div className="flex flex-row space-x-1 h-[100px]">
                  <button className="custom-button">Chat Minibot</button>
                  <button className="custom-button">Hubungi Lokasani</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex p-2 w-full">
            <div className="flex flex-col w-8/12">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md shadow-md">
                <div className="rounded-md bg-white p-2">
                  <h1 className="text-3xl font-bold">Event Aktif</h1>
                </div>
                <span className="text-[#999999] ml-1 text-sm">
                  Pantau acara Anda yang sedang berlangsung di sini!
                </span>
                <div className="rounded-md p-2 mt-4 flex w-full p-4 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-1">
                  <div className="w-4/12">
                    <h1 className="text-3xl font-bold text-base flex pr-4">
                      Workshop Keramik Jawa Timur bersama Kak Seto{" "}
                    </h1>
                    <span className="text-[#999999] text-[12px] mb-2">
                      18 Nov 2023 | Grand Plaza, Jakarta
                    </span>

                    <div className="flex items-center mt-2">
                      <div className="rounded-full bg-green-500 w-3 h-3"></div>
                      <span className="text-3xl font-bold text-sm ml-2">
                        Status Event Aktif
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center w-8/12">
                    <div className="flex flex-col items-center h-full justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-auto">
                      <div className="absolute left-0 top-1/2 bg-[#026C52] w-1 h-full transform -translate-y-1/2 ml-1"></div>
                      <h1 className="text-[#999999] text-sm px-3">
                        Pengunjung On-Site (org)
                      </h1>
                      <span className="text-3xl font-bold font-plus-jakarta-sans mb-2">
                        87/350
                      </span>
                    </div>

                    <div className="flex flex-col py-3 h-full items-center justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-2">
                      <div className="absolute left-0 top-1/2 bg-[#243775] w-1 h-full transform -translate-y-1/2 ml-1"></div>
                      <h1 className="text-[#999999] text-sm ">
                        Tiket Terjual (pcs)
                      </h1>
                      <span className="text-3xl font-bold font-plus-jakarta-sans">
                        87/350
                      </span>
                    </div>

                    <div className="flex flex-col py-3 h-full items-center justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-2">
                      <div className="absolute left-0 top-1/2 bg-[#8D93A5] w-1 h-full py-1 transform -translate-y-1/2 ml-1"></div>
                      <h1 className="text-[#999999] text-sm ">
                        Merch Terjual (pcs)
                      </h1>
                      <span className="text-3xl font-bold font-plus-jakarta-sans">
                        87/350
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-md p-2 mt-4 flex w-full p-4 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-1">
                  <div className="w-4/12">
                    <h1 className="text-3xl font-bold text-base flex pr-4">
                      Workshop Keramik Jawa Timur bersama Kak Seto{" "}
                    </h1>
                    <span className="text-[#999999] text-[12px] mb-2">
                      18 Nov 2023 | Grand Plaza, Jakarta
                    </span>

                    <div className="flex items-center mt-2">
                      <div className="rounded-full bg-green-500 w-3 h-3"></div>
                      <span className="text-3xl font-bold text-sm ml-2">
                        Status Event Aktif
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center w-8/12">
                    <div className="flex flex-col items-center h-full justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-auto">
                      <div className="absolute left-0 top-1/2 bg-[#026C52] w-1 h-full transform -translate-y-1/2 ml-1"></div>
                      <h1 className="text-[#999999] text-sm px-3">
                        Pengunjung On-Site (org)
                      </h1>
                      <span className="text-3xl font-bold font-plus-jakarta-sans mb-2">
                        87/350
                      </span>
                    </div>

                    <div className="flex flex-col py-3 h-full items-center justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-2">
                      <div className="absolute left-0 top-1/2 bg-[#243775] w-1 h-full transform -translate-y-1/2 ml-1"></div>
                      <h1 className="text-[#999999] text-sm ">
                        Tiket Terjual (pcs)
                      </h1>
                      <span className="text-3xl font-bold font-plus-jakarta-sans">
                        87/350
                      </span>
                    </div>

                    <div className="flex flex-col py-3 h-full items-center justify-between bg-white rounded-md shadow-md relative text-center flex-1 ml-2">
                      <div className="absolute left-0 top-1/2 bg-[#8D93A5] w-1 h-full py-1 transform -translate-y-1/2 ml-1"></div>
                      <h1 className="text-[#999999] text-sm ">
                        Merch Terjual (pcs)
                      </h1>
                      <span className="text-3xl font-bold font-plus-jakarta-sans">
                        87/350
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-md mt-3">
                <h1 className="text-3xl font-bold">Payout</h1>
                <p className="text-[#999999] text-sm">
                  Lihat apakah Pembayaran Event Kamu sudah turun!
                </p>
                <table className="table-auto w-full mt-2">
                  <thead className="text-left">
                    <tr>
                      <th className="px-3 py-3">Nama Event</th>
                      <th className="px-3 py-3">Diajukan</th>
                      <th className="px-3 py-3">Pendapatan</th>
                      <th className="px-3 py-3">Transfer ke</th>
                      <th className="px-3 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#F2F2F2]">
                      <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                        W run Woman
                      </td>
                      <td className="px-3 py-3 text-[#3653B0]">20/11/2023</td>
                      <td className="px-3 py-3 text-[#3653B0]">
                        Rp 12.550.000
                      </td>
                      <td className="px-3 py-3 text-[#3653B0]">
                        Rekening utama{" "}
                      </td>
                      <td className="px-3 py-3 text-black rounded-r-[12px]">
                        <span className="bg-[#9EC7BD] px-3 py-1 rounded-full">
                          Paid
                        </span>
                      </td>
                    </tr>
                    <div className="h-3"></div>
                    <tr className="bg-[#F2F2F2]">
                      <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                        W run Woman
                      </td>
                      <td className="px-3 py-3 text-[#3653B0]">20/11/2023</td>
                      <td className="px-3 py-3 text-[#3653B0]">
                        Rp 12.550.000
                      </td>
                      <td className="px-3 py-3 text-[#3653B0]">
                        Rekening utama{" "}
                      </td>
                      <td className="px-3 py-3 text-black rounded-r-[12px]">
                        <span className="bg-[#F8D46D] px-3 py-1 rounded-full">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <div className="h-3"></div>
                    <tr className="bg-[#F2F2F2]">
                      <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                        W run Woman
                      </td>
                      <td className="px-3 py-3 text-[#3653B0]">20/11/2023</td>
                      <td className="px-3 py-3 text-[#3653B0]">
                        Rp 12.550.000
                      </td>
                      <td className="px-3 py-3 text-[#3653B0]">
                        Rekening utama{" "}
                      </td>
                      <td className="px-3 py-3 text-black rounded-r-[12px]">
                        <span className="bg-[#F8D46D] px-3 py-1 rounded-full">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-4/12 ml-4 shadow-md rounded-md px-5 py-5 bg-white">
              <h1 className="text-3xl font-semibold">Event Draft</h1>
              <p className="text-[#999999] text-xs mt-2">
                Lihat apakah Event Draft kamu sudah disiarkan!
              </p>
              <table className="table-auto w-full mt-5">
                <thead className="text-left">
                  <tr>
                    <th className="px-3 py-3">Nama Event</th>
                    <th className="px-3 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#F2F2F2]">
                    <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                      W run Woman
                    </td>
                    <td className="px-3 py-3 text-black rounded-r-[12px]">
                      <span className="bg-[#9EC7BD] px-3 py-1 rounded-full">
                        Siarkan
                      </span>
                    </td>
                  </tr>
                  <div className="h-3"></div>
                  <tr className="bg-[#F2F2F2]">
                    <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                      W run Woman
                    </td>
                    <td className="px-3 py-3 text-black rounded-r-[12px]">
                      <span className="bg-[#9EC7BD] px-3 py-1 rounded-full">
                        Siarkan
                      </span>
                    </td>
                  </tr>
                  <div className="h-3"></div>
                  <tr className="bg-[#F2F2F2]">
                    <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                      W run Woman
                    </td>
                    <td className="px-3 py-3 text-black rounded-r-[12px]">
                      <span className="bg-[#9EC7BD] px-3 py-1 rounded-full">
                        Siarkan
                      </span>
                    </td>
                  </tr>
                  <div className="h-3"></div>
                  <tr className="bg-[#F2F2F2]">
                    <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                      W run Woman
                    </td>
                    <td className="px-3 py-3 text-black rounded-r-[12px]">
                      <span className="bg-[#F8D46D]  px-3 py-1 rounded-full">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <div className="h-3"></div>
                  <tr className="bg-[#F2F2F2]">
                    <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                      W run Woman
                    </td>
                    <td className="px-3 py-3 text-black rounded-r-[12px]">
                      <span className="bg-[#F8D46D]  px-3 py-1 rounded-full">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <div className="h-3"></div>
                  <tr className="bg-[#F2F2F2]">
                    <td className="px-3 py-3 rounded-l-[12px] text-[#3653B0]">
                      W run Woman
                    </td>
                    <td className="px-3 py-3 text-black rounded-r-[12px]">
                      <span className="bg-[#F3B1A5] px-3 py-1 rounded-full">
                        Ditolak
                      </span>
                    </td>
                  </tr>
                  <div className="h-3"></div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* content end */}
      </main>
    </section>
  );
}

export default Index;
