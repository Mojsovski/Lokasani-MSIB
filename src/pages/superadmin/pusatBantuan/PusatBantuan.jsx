import React, { useState } from "react";
import SearchTiket from "../../../component/superadmin/pusatbantuan/SearchTiket";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/globalComponent/Navbar";
import Pagination from "../../../component/superadmin/globalComponent/Pagination";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PusatBantuan() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);

  const [userData] = useState([
    {
      id: 1001,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1002,
      subject: "Mengapa saya tidak bisa upload foto",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Proses",
      detail: {
        ask: "Aku sudah mencobanya namun selalu gagal.",
        answer:
          "Apakah Anda sudah mencoba mengupload foto melalui pengaturan akun?",
      },
    },
    {
      id: 1003,
      subject: "Mengapa saya tidak bisa ganti nomor hp",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Selesai",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1004,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1005,
      subject: "Mengapa saya tidak bisa upload foto",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Proses",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1006,
      subject: "Mengapa saya tidak bisa ganti nomor hp",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Selesai",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1007,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1008,
      subject: "Mengapa saya tidak bisa upload foto",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Proses",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1009,
      subject: "Mengapa saya tidak bisa ganti nomor hp",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Selesai",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1010,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1011,
      subject: "Mengapa saya tidak bisa upload foto",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Proses",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1012,
      subject: "Mengapa saya tidak bisa ganti nomor hp",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Selesai",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1013,
      subject: "Cara menambahkan produk merchandise",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Tertunda",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1014,
      subject: "Mengapa saya tidak bisa upload foto",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Proses",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
    {
      id: 1015,
      subject: "Mengapa saya tidak bisa ganti nomor hp",
      changeDate: "12 November 2023",
      fromMessage: " Admin UMKM",
      status: "Selesai",
      detail: {
        ask: "Sudah, tapi sepertinya tidak berhasil. Ketika saya mencoba menyimpan perubahan, tidak ada yang terjadi.",
        answer:
          "Apakah Anda sudah mencoba mengganti nomor handphone melalui pengaturan akun?",
      },
    },
  ]);
  const itemsPerPage = 10;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleRow = (rowId) => {
    const isExpanded = expandedRows.includes(rowId);
    setExpandedRows((prevState) => {
      if (isExpanded) {
        return prevState.filter((id) => id !== rowId);
      } else {
        return [...prevState, rowId];
      }
    });
  };

  const searchFilter = (data) => {
    return data.filter((item) =>
      item.id.toString().includes(searchTerm.toLowerCase())
    );
  };

  const filterDataByStatus = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const clearStatusFilter = () => {
    setStatusFilter("");
    setCurrentPage(1);
  };

  const filteredData = searchFilter(userData).filter((item) => {
    if (!statusFilter) {
      return true;
    }
    return item.status === statusFilter;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="  bg-[#F2F2F2]">
      <Sidebar />
      <Navbar title="Pusat Bantuan" />

      <div className=" px-4 py-28 sm:ml-[266px] flex flex-col gap-5 relative">
        <SearchTiket
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchFilter={searchFilter}
        />
        <div className="w-[600px] h-10 justify-start items-center flex-row inline-flex gap-4 ">
          <button
            className={`w-24 h-11 px-4 py-3 rounded-xl justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white ${
              statusFilter === null
                ? " text-white bg-blue-800"
                : "bg-white text-black"
            }`}
            onClick={clearStatusFilter}
          >
            <div className="justify-center items-center gap-2 flex">
              <div className="  text-sm font-semiboldleading-tight">Semua</div>
            </div>
          </button>
          <button
            className={`w-24 h-11 px-4 py-3 rounded-xl justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white ${
              statusFilter === "Tertunda"
                ? " text-white bg-blue-800"
                : "bg-white text-black"
            }`}
            onClick={() => filterDataByStatus("Tertunda")}
          >
            <div className="justify-center items-center gap-2 flex">
              <div className="  text-sm font-semiboldleading-tight">
                Tertunda
              </div>
            </div>
          </button>
          <button
            className={`w-24 h-11 px-4 py-3 rounded-xl justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white ${
              statusFilter === "Proses"
                ? " text-white bg-blue-800"
                : "bg-white text-black"
            }`}
            onClick={() => filterDataByStatus("Proses")}
          >
            <div className="justify-center items-center gap-2 flex">
              <div className="  text-sm font-semiboldleading-tight">
                Diproses
              </div>
            </div>
          </button>
          <button
            className={`w-24 h-11 px-4 py-3  rounded-xl justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white ${
              statusFilter === "Selesai"
                ? " text-white bg-blue-800"
                : "bg-white text-black"
            }`}
            onClick={() => filterDataByStatus("Selesai")}
          >
            <div className="justify-center items-center gap-2 flex">
              <div className="  text-sm font-semiboldleading-tight">
                Selesai
              </div>
            </div>
          </button>
        </div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg relative">
          {/* table */}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 z-10">
            <thead className="text-xs font-semibold text-[#243775] uppercase #987201">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No Tiket
                </th>
                <th scope="col" className="px-1 py-3">
                  Subjek
                </th>
                <th scope="col" className="px-1 py-3">
                  Status
                </th>
                <th scope="col" className="px-1 py-3">
                  Tanggal Buat Akun
                </th>
                <th scope="col" className="px-1 py-3">
                  Tiket diajukan oleh
                </th>
              </tr>
            </thead>
            {/* isi tabel */}
            <tbody>
              {currentItems.map((item) => (
                <React.Fragment key={item.id}>
                  <tr
                    key={item.id}
                    className={`bg-white border-b hover:bg-gray-50 ${
                      expandedRows.includes(item.id)
                        ? "transition-max-h-hh max-h-60"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4  text-[#3653B0]">{item.id}</td>
                    <td className="px-1 py-4 text-[#3653B0]">{item.subject}</td>
                    <td className="font-semibold ">
                      <p
                        className={`${
                          item.status === "Selesai"
                            ? "bg-[#9EC7BD] py-1 w-24 text-[#1F5C4D] items-center flex justify-center rounded-full"
                            : item.status === "Proses"
                            ? "bg-[#768DD5] py-1 w-24 text-white items-center flex justify-center rounded-full"
                            : item.status === "Tertunda"
                            ? "bg-[#F8D46D] py-1 w-24 text-[#987201] items-center flex justify-center rounded-full"
                            : "bg-[#F3B1A5] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332]"
                        }`}
                      >
                        {item.status}
                      </p>
                    </td>
                    <td className="px-1 py-4 text-[#3653B0]">
                      {item.changeDate}
                    </td>
                    <td className="px-1 py-4 text-[#3653B0]">
                      {item.fromMessage}
                    </td>
                    <td className="px-8 py-4 relative">
                      <button className="w-9 h-9 rounded-full bg-blue-800 flex items-center justify-center">
                        <ExpandMoreIcon
                          color="white"
                          onClick={() => toggleRow(item.id)}
                        />
                      </button>
                    </td>
                  </tr>
                  {expandedRows.includes(item.id) && (
                    <tr>
                      <td className=" mb-40 " colSpan="6">
                        <div
                          className={`bg-white w-full pl-28 pr-4 py-4 space-y-4 transition-max-h-hh ${
                            expandedRows.includes(item.id)
                              ? "max-h-96"
                              : "max-h-0"
                          } overflow-hidden`}
                        >
                          <div className=" h-28 w-full p-2 border border-slate-500 rounded-lg flex-col justify-end items-end inline-flex relative  ">
                            <textarea
                              class="resize-none h-16 w-full  rounded-md py-2 px-4"
                              placeholder="Tulis jawaban disini"
                            ></textarea>
                            <div class="w-60 h-8 gap-4 right-5 justify-items-end flex-row inline-flex  ">
                              <button className="">
                                <svg
                                  width="32"
                                  height="33"
                                  viewBox="0 0 32 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="mdi:attachment">
                                    <path
                                      id="Vector"
                                      d="M9.99935 24.4987C8.05443 24.4987 6.18917 23.7261 4.8139 22.3508C3.43863 20.9755 2.66602 19.1103 2.66602 17.1654C2.66602 15.2204 3.43863 13.3552 4.8139 11.9799C6.18917 10.6046 8.05443 9.83203 9.99935 9.83203H23.9993C25.4138 9.83203 26.7704 10.3939 27.7706 11.3941C28.7708 12.3943 29.3327 13.7509 29.3327 15.1654C29.3327 16.5799 28.7708 17.9364 27.7706 18.9366C26.7704 19.9368 25.4138 20.4987 23.9993 20.4987H12.666C11.782 20.4987 10.9341 20.1475 10.309 19.5224C9.68387 18.8973 9.33268 18.0494 9.33268 17.1654C9.33268 16.2813 9.68387 15.4335 10.309 14.8083C10.9341 14.1832 11.782 13.832 12.666 13.832H22.666V15.832H12.666C12.3124 15.832 11.9733 15.9725 11.7232 16.2226C11.4732 16.4726 11.3327 16.8117 11.3327 17.1654C11.3327 17.519 11.4732 17.8581 11.7232 18.1082C11.9733 18.3582 12.3124 18.4987 12.666 18.4987H23.9993C24.4371 18.4987 24.8705 18.4125 25.275 18.245C25.6794 18.0774 26.0468 17.8319 26.3564 17.5224C26.6659 17.2129 26.9114 16.8454 27.0789 16.441C27.2465 16.0366 27.3327 15.6031 27.3327 15.1654C27.3327 14.7276 27.2465 14.2942 27.0789 13.8898C26.9114 13.4853 26.6659 13.1179 26.3564 12.8083C26.0468 12.4988 25.6794 12.2533 25.275 12.0858C24.8705 11.9183 24.4371 11.832 23.9993 11.832H9.99935C8.58486 11.832 7.22831 12.3939 6.22811 13.3941C5.22792 14.3943 4.66602 15.7509 4.66602 17.1654C4.66602 18.5799 5.22792 19.9364 6.22811 20.9366C7.22831 21.9368 8.58486 22.4987 9.99935 22.4987H22.666V24.4987H9.99935Z"
                                      fill="black"
                                    />
                                  </g>
                                </svg>
                              </button>
                              <button className="border border-black w-24 h-full px-4 py-3 rounded-lg justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white">
                                <div className="justify-center items-center gap-2 flex">
                                  <div className=" text-xs font-semiboldleading-tight">
                                    Batal
                                  </div>
                                </div>
                              </button>
                              <button className="border border-black w-24 h-full px-4 py-3 rounded-lg justify-center items-center inline-flex hover:bg-blue-800 text-black hover:text-white">
                                <div className="justify-center items-center gap-2 flex">
                                  <div className=" text-xs font-semiboldleading-tight">
                                    Kirim
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>

                          {item.detail && (
                            <div className="h-full w-full p-2 rounded-lg flex-col justify-items-start inline-flex relative ">
                              <div className="w-full h-20 py-4 border-b border-stone-300 flex-col justify-start items-start gap-2 inline-flex">
                                <div className="w-full justify-between items-center inline-flex">
                                  <div className="text-center text-black text-sm font-semibold  leading-normal">
                                    Beyours
                                  </div>
                                  <div className="w-20 text-neutral-400 text-sm font-semibold  leading-normal">
                                    1 Jam Lalu
                                  </div>
                                </div>
                                <div className="w-full text-stone-500 text-sm font-semibold  leading-normal">
                                  {item.detail.ask}
                                </div>
                              </div>
                              <div className="w-full h-20 py-4 border-b border-stone-300 flex-col justify-start items-start gap-2 inline-flex">
                                <div className="w-full justify-between items-center inline-flex">
                                  <div className="text-center text-black text-sm font-semibold  leading-normal">
                                    Anda
                                  </div>
                                  <div className="w-20 text-neutral-400 text-sm font-semibold  leading-normal">
                                    1 Jam Lalu
                                  </div>
                                </div>
                                <div className="w-full text-stone-500 text-sm font-semibold  leading-normal">
                                  {item.detail.answer}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 mx-4">
          <div className="text-[#828282]">
            Menampilkan {(currentPage - 1) * itemsPerPage + 1} sampai{" "}
            {Math.min(currentPage * itemsPerPage, userData.length)} dari{" "}
            {userData.length} item
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PusatBantuan;
