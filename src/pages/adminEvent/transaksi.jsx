import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../component/adminEvent/Sidebar";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import user from "../../assets/img/user.svg";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoIcon from "@mui/icons-material/Info";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Transaksi() {
  const [transactions, setTransactions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeButton, setActiveButton] = useState("all");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://658197343dfdd1b11c43aec0.mockapi.io//transaksi"
      );
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteData = async (transactionId) => {
    try {
      await axios.delete(
        `https://658197343dfdd1b11c43aec0.mockapi.io//transaksi/${transactionId}`
      );
      setTransactions((prevTransactions) =>
        prevTransactions.filter(
          (transaction) => transaction.id !== transactionId
        )
      );
      console.log("Deleting transaction with ID:", transactionId);
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleExportButtonClick = () => {
    console.log("Exporting:", selectedDate);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const openDetail = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeDetail = () => {
    setSelectedTransaction(null);
  };

  const filteredTransactions =
    activeButton === "all"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.status.toLowerCase() === activeButton
        );

  return (
    <section>
      <Sidebar />

      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        {/* header start */}
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className="pl-5">
            <h1 className="text-3xl font-bold">Transaksi</h1>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex mr-16 gap-x-6">
                <a className="cursor-pointer">
                  <TextsmsIcon className="text-[#253E8D]" />
                </a>
                <a className="cursor-pointer">
                  <NotificationsActiveIcon className="text-[#253E8D]" />
                </a>
                <a href="">
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
        <div className="bg-white flex items-center justify-between rounded-sm">
          <div className="flex items-center ">
            {["all", "paid", "pending", "canceled"].map((button) => (
              <button
                key={button}
                style={{
                  backgroundColor: activeButton === button ? "#3653B0" : "#ccc",
                  color: "white",
                  padding: "6px 12px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  borderRadius: "4px",
                  margin: "2px",
                }}
                onClick={() => handleButtonClick(button)}
              >
                {button.charAt(0).toUpperCase() + button.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <div className="flex justify-end items-center mr-2 ">
              <h1 className="font-semibold">Tampilkan</h1>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Tanggal/bulan"
                className="bg-white text-[#3653B0] p-2 py-2 rounded-md outline outline-black outline-1 ml-2"
              />
            </div>
            <button
              className="bg-[#243775] text-white py-[6px] px-4 rounded-md m-2 flex items-center"
              onClick={handleExportButtonClick}
            >
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 p-4">
          <div className="col-span-1 bg-white p-3 rounded-md shadow-md relative">
            <ul className="list-none p-0 m-0">
              <li className="flex justify-between items-center border-b border-gray-200 py-1">
                <span className="text-3xl font-bold text-sm text-[#243775] w-1/6">
                  #ID
                </span>
                <span className="text-3xl font-bold text-sm text-[#243775] w-1/6">
                  Tanggal
                </span>
                <span className="text-3xl font-bold text-sm text-[#243775] w-1/6">
                  Username
                </span>
                <span className="text-3xl font-bold text-sm text-[#243775] w-1/6">
                  Detail
                </span>
                <span className="text-3xl font-bold text-sm text-[#243775] w-1/6">
                  Total Transaksi
                </span>
                <span className="text-3xl font-bold text-sm text-[#243775] w-1/6">
                  Status
                </span>
                <span className="text-3xl font-bold text-sm text-[#243775] w-1/6">
                  Aksi
                </span>
              </li>
              {filteredTransactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className="flex justify-between items-center border-b border-gray-200 py-2"
                >
                  <span className="text-[#3653B0] w-1/6">{transaction.id}</span>
                  <span className="text-[#3653B0] w-1/6">
                    {transaction.tanggal}
                  </span>
                  <span className="text-[#3653B0] w-1/6">
                    {transaction.name}
                  </span>
                  <span className="text-[#3653B0] w-1/6">
                    {transaction.detail_tiket}
                  </span>
                  <span className="text-[#3653B0] w-1/6">
                    {transaction.total_transaksi || "N/A"}
                  </span>
                  <span
                    className={`text-${
                      transaction.status === "paid"
                        ? "blue-500"
                        : transaction.status === "canceled"
                        ? "red-500"
                        : "green-500"
                    } w-1/6`}
                  >
                    {" "}
                    {transaction.status}
                  </span>
                  <span className="text-[#3653B0] w-1/6">
                    <InfoIcon onClick={() => openDetail(transaction)} />
                    <DeleteOutlineIcon
                      onClick={() => handleDeleteData(transaction.id)}
                    />
                  </span>
                </li>
              ))}
            </ul>
            {/* Detail Component */}
            {selectedTransaction && (
              <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-md">
                  <h2>ID Transaksi: {selectedTransaction.id}</h2>
                  <p>Tanggal: {selectedTransaction.tanggal}</p>
                  <p>Username: {selectedTransaction.username}</p>
                  <p>Detail Tiket: {selectedTransaction.detail_tiket}</p>
                  <p>Total Transaksi: ${selectedTransaction.total}</p>
                  <p>Status: {selectedTransaction.status}</p>
                  {/* Tambahkan elemen-elemen lain sesuai dengan struktur transaksi */}
                  <button
                    onClick={closeDetail}
                    className="bg-blue-700 w-full rounded-md text-white"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Transaksi;
