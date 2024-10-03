import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactPaginate from "react-paginate";
import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";
import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MySwal = withReactContent(Swal);

const DaftarPesanan = () => {
  const [dataListOrder, setDataListOrder] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://657b094c394ca9e4af13732c.mockapi.io/pesanan/dataListOrder"
      );
      setDataListOrder(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase();
    const filteredResults = dataListOrder.filter(
      (item) =>
        item.tanggal.toLowerCase().includes(searchTerm) ||
        item.nama_pelanggan.toLowerCase().includes(searchTerm) ||
        item.pembayaran.toLowerCase().includes(searchTerm) ||
        item.status.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredResults);
    setCurrentPage(0);
  };

  const handleDelete = async (id) => {
    const confirmation = await MySwal.fire({
      title: "Are you sure?",
      text: "Konfirmasi menghapus data pesanan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmation.isConfirmed) {
      try {
        await axios.delete(
          `https://657b094c394ca9e4af13732c.mockapi.io/pesanan/dataListOrder/${id}`
        );
        fetchData();
        await MySwal.fire("Deleted!", "Data berhasil dihapus", "success");
      } catch (error) {
        console.error("Gagal menghapus data:", error.response.data);
        await MySwal.fire("Error!", "Gagal menghapus data", "error");
      }
    }
  };

  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full pl-[255px]">
          <div>
            <Header headerTitle={"Daftar Pesanan"} />
          </div>
          <div className="bg-white mx-6 mt-6 mb-2 px-6 py-2 flex justify-between">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Cari Infoice"
                  className="w-64 py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  className="bg-[#253E8D] text-white rounded-md py-2 px-3 ml-2"
                  onClick={handleSearch}
                >
                  Cari
                </button>
              </div>
            </div>
            <div>
              <button className="bg-[#253E8D] text-white rounded-md py-2 px-3">
                <DownloadIcon fontSize="small mr-2" />
                Ekspor
              </button>
            </div>
          </div>
          <div className="bg-white mx-6 px-6 py-2">
            <table className="table w-full">
              <thead>
                <th className="text-left border-t-2 border-b-2 px-4 py-2">
                  ID
                </th>
                <th className="text-left border-t-2 border-b-2 px-4 py-2">
                  Tanggal
                </th>
                <th className="text-left border-t-2 border-b-2 px-4 py-2">
                  Nama Pelanggan
                </th>
                <th className="text-left border-t-2 border-b-2 px-4 py-2">
                  Pembayaran
                </th>
                <th className="text-left border-t-2 border-b-2 px-4 py-2">
                  Status
                </th>
                <th className="text-left border-t-2 border-b-2 px-4 py-2">
                  Aksi
                </th>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border-t-2 border-b-2 px-4 py-3">
                      {item.id}
                    </td>
                    <td className="border-t-2 border-b-2 px-4 py-3">
                      {formatDate(item.tanggal)}
                    </td>
                    <td className="border-t-2 border-b-2 px-4 py-3">
                      {item.nama_pelanggan}
                    </td>
                    <td
                      className={`border-t-2 border-b-2 px-4 py-3 font-semibold ${
                        item.pembayaran === "Gagal"
                          ? "text-red-500"
                          : item.pembayaran === "Dibayar"
                          ? "text-green-500"
                          : item.pembayaran === "Dibatalkan"
                          ? "text-orange-500"
                          : item.pembayaran === "Tertunda"
                          ? "text-blue-400"
                          : ""
                      }`}
                    >
                      {item.pembayaran}
                    </td>
                    <td className="text-white border-t-2 border-b-2 px-4 py-3 font-semibold">
                      <p
                        className={`block w-fit text-white px-1 py-0 rounded-lg ${
                          item.status === "Tidak Dikirim"
                            ? "bg-red-500"
                            : item.status === "Dikirim"
                            ? "bg-green-500"
                            : item.status === "Dikemas"
                            ? "bg-orange-500"
                            : item.status === "Siap Diambil"
                            ? "bg-blue-400"
                            : ""
                        }`}
                      >
                        {item.status}
                      </p>
                    </td>

                    <td className="border-t-2 border-b-2 px-4 py-3 font-semibold flex items-center gap-2 text-gray-500">

                      {/* <InfoIcon /> */}

                      <button onClick={() => handleDelete(item.id)}>
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination mt-4">
              <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                previousLabel={<ArrowBackIosIcon fontSize="medium" />}
                nextLabel={<ArrowForwardIosIcon fontSize="medium" />}
                containerClassName={
                  "pagination flex justify-end gap-2 mt-6 px-6"
                }
                activeClassName={
                  "bg-gray-800 text-white text-sm px-4 py-2 rounded-lg"
                }
                pageClassName={
                  "page-item bg-[#CCCCCC] text-white text-sm px-4 py-2 rounded-lg"
                }
                previousClassName={"flex items-center font-bold text-gray-500"}
                nextClassName={"flex items-center font-bold text-gray-500"}
                breakClassName={"break-item"}
                disabledClassName={"disabled-item"}
                pageLinkClassName={"page-link"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarPesanan;
