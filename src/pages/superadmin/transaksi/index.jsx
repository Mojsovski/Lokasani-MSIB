import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import CardTranksasi from "../../../component/superadmin/globalComponent/CardTransaksi";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Date from "../../../component/superadmin/transaksi/Date";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NorthIcon from "@mui/icons-material/North";
import Pagination from "../.../../../../component/superadmin/globalComponent/Pagination";

const Transaksi = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [selectStatus, setSelectStatus] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  const usersData = [
    { judul: "Pemasukan Keseluruhan (Rp)", quantity: 35440000 },
    { judul: "Pemasukan Event (Rp)", quantity: 35440000 },
    { judul: "Pemasukan UMKM (Rp)", quantity: 35440000 },
  ];

  //   {
  //     id: 1,
  //     tanggal: "25 November 2023",
  //     nama: "Icha",
  //     detail: "Tiket",
  //     total: "Rp.10000",
  //     status: "gagal",
  //   },
  //   {
  //     id: 2,
  //     tanggal: "25 November 2023",
  //     nama: "Icha",
  //     detail: "Tiket",
  //     total: "Rp.10000",
  //     status: "berhasil",
  //   },
  //   {
  //     id: 3,
  //     tanggal: "25 November 2023",
  //     nama: "Icha",
  //     detail: "Tiket",
  //     total: "Rp.10000",
  //     status: "berhasil",
  //   },
  //   {
  //     id: 4,
  //     tanggal: "25 November 2023",
  //     nama: "Icha",
  //     detail: "Tiket",
  //     total: "Rp.10000",
  //     status: "diproses",
  //   },
  //   {
  //     id: 5,
  //     tanggal: "25 November 2023",
  //     nama: "Icha",
  //     detail: "Tiket",
  //     total: "Rp.10000",
  //     status: "gagal",
  //   },
  //   {
  //     id: 6,
  //     tanggal: "25 November 2023",
  //     nama: "Icha",
  //     detail: "Tiket",
  //     total: "Rp.10000",
  //     status: "gagal",
  //   },
  //   {
  //     id: 7,
  //     tanggal: "25 November 2023",
  //     nama: "Icha",
  //     detail: "Tiket",
  //     total: "Rp.10000",
  //     status: "berhasil",
  //   },
  // ];

  const filteredTransaction = transactions.filter((item) => {
    if (selectStatus === "Semua") {
      return true;
    } else {
      return item.status.toLowerCase() === selectStatus.toLowerCase();
    }
  });

  const handlePayout = () => {
    navigate("/superadmin/transaksi/payout");
  };

  const mockApiEndpoint =
    "https://657bd9e4394ca9e4af14de16.mockapi.io/transactions/report/Superadmintransactions";

  useEffect(() => {
    fetch(mockApiEndpoint)
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransaction.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="Transaksi" />
      <div className="px-4 py-28 sm:ml-[266px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap- 2xl:gap-7.5 pb-6">
          {usersData.map((pengguna, index) => (
            <CardTranksasi
              key={index}
              judul={pengguna.judul}
              quantity={pengguna.quantity}
            />
          ))}
          <div className="rounded-xl border border-stroke bg-white px-3 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1 ">
            <button
              className="bg-[#026C52] h-[45px] w-[45px] rounded-full flex items-center justify-center hover:bg-white hover:outline outline-1 outline-green-600 "
              onClick={handlePayout}
            >
              <ArrowForwardIosIcon className="h-[30px] w-[30px] text-white hover:text-green-600" />
            </button>
            <p className="text-[10px] text-gray-700   dark:text-gray-400 pt-4">
              Permintaan Payout
            </p>
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
              32
            </h5>
            <p className="flex items-center  text-sm font-medium mb-8">
              <NorthIcon className="text-green-600" />
              <span className=" px-1 text-[20px] text-green-600">+2%</span>
              <span className="text-gray-500">than last week</span>
            </p>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="bg-gray-100 flex items center justify-between rounded-sm">
            <div className="pl-1 flex items-center">
              <button
                className={`py-2 px-8 bg-white outline outline-blue-500 outline-1 hover:bg-[#3653B0] text-blue-800 hover:text-white rounded-xl mb-2 md:mb-0 ${
                  selectStatus === "Semua" ? "bg-[#3653B0] text-blue-300" : ""
                }`}
                onClick={() => setSelectStatus("Semua")}
              >
                Semua
              </button>
              <button
                className={`py-2 px-8 bg-white outline outline-blue-500 outline-1 hover:bg-[#3653B0] text-blue-800 hover:text-white rounded-xl ml-2 mb-2 md:mb-0 ${
                  selectStatus === "berhasil"
                    ? "bg-[#3653B0] text-blue-600"
                    : ""
                }`}
                onClick={() => setSelectStatus("berhasil")}
              >
                Berhasil
              </button>
              <button
                className={`py-2 px-8 bg-white outline outline-blue-500 outline-1 hover:bg-[#3653B0] text-blue-800 hover:text-white rounded-xl ml-2 mb-2 md:mb-0 ${
                  selectStatus === "diproses"
                    ? "bg-[#3653B0] text-blue-600"
                    : ""
                }`}
                onClick={() => setSelectStatus("diproses")}
              >
                Diproses
              </button>
              <button
                className={`py-2 px-8 bg-white outline outline-blue-500 outline-1 hover:bg-[#3653B0] text-blue-800 hover:text-white rounded-xl ml-2 mb-2 md:mb-0 ${
                  selectStatus === "gagal" ? "bg-[#3653B0] text-blue-600" : ""
                }`}
                onClick={() => setSelectStatus("gagal")}
              >
                Gagal
              </button>
            </div>

            <div className="flex items-center">
              <div className="flex justify-end items-center mr-2 ">
                <h1 className="font-semibold">Tampilkan</h1>
                <Date />
              </div>
              <button className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center">
                <KeyboardArrowDownIcon fontSize="small" className="mr-1" />
                Import
              </button>
              <button className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center">
                <FileDownloadIcon fontSize="small" className="mr-1" />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto relative">
          <div>
            <table className="w-full text-sm text-[#6D82C5] text-left z-10">
              <thead className="bg-white">
                <tr className="text-md font-semibold tracking-wide text-left text-blue-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Detail
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {currentItems.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="px-5 py-4 font-reguler text-[#3653B0]">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 font-reguler text-[#3653B0]">
                      {item.nama}
                    </td>
                    <td className="px-1 py-4 font-reguler text-[#3653B0]">
                      {item.tanggal}
                    </td>
                    <td className="px-6 py-4 font-reguler text-[#3653B0]">
                      {item.detail}
                    </td>
                    <td className="px-3 py-4 font-reguler text-[#3653B0]">
                      {item.total}
                    </td>
                    <td
                      className={`${
                        item.status === "berhasil"
                          ? "bg-[#9EC7BD] py-2 px-6 m-4 w-20 text-[#1F5C4D] items-center flex justify-center rounded-full"
                          : item.status === "gagal"
                          ? "bg-red-300 py-2 w-20 px-6 m-4 text-[#9B4332] items-center flex justify-center rounded-full"
                          : item.status === "diproses"
                          ? "bg-yellow-300 py-2 w-20 px-6 m-4 text-yellow-800 items-center flex justify-center rounded-full"
                          : ""
                      }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 mx-4">
            <div className="text-[#828282]">
              Menampilkan {(currentPage - 1) * itemsPerPage + 1} sampai{" "}
              {Math.min(currentPage * itemsPerPage, filteredTransaction.length)}{" "}
              dari {filteredTransaction.length} item
            </div>
            <div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(
                  filteredTransaction.length / itemsPerPage
                )}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
