/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/artikel/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextsmsIcon from "@mui/icons-material/Textsms";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import PlaceImage from "../../../assets/img/placeimage-artikel.png";
import imageDelete from "../../../assets/img/bg-hapus-artikel.png";

function KelolaArtikel() {
  // Function Info
  const [info, setInfo] = useState(null);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(false);
  const handleInfo = (event) => {
    setIsPopupInfoOpen(false);
    console.log(info);
  };
  const handlePopupInfo = () => {
    setIsPopupInfoOpen(true);
  };

  // Function Hapus
  const [hapus, setHapus] = useState(null);
  const [isPopupHapusOpen, setIsPopupHapusOpen] = useState(false);
  const handleHapus = (event) => {
    setIsPopupHapusOpen(false);
    console.log(hapus);
  };
  const handlePopupHapus = () => {
    setIsPopupHapusOpen(true);
  };
  return (
    <section>
      <Sidebar />
      <Navbar title="Kelola Artikel" />

      <main className="pt-[100px] h-screen sm:ml-[246px] bg-[#D9D9D9] pb-5">
        <div className="flex justify-between mx-8">
          <div className="flex items-center relative">
            <SearchIcon className="ml-3 cursor-pointer absolute" />
            <input
              type="text"
              name="name"
              placeholder="Cari artikel"
              className="w-[250px] py-1 h-10 pl-12 bg-[#fff] rounded-[9px]"
            ></input>
          </div>
          <div className="flex justify-end items-center">
            <span className="font-semibold">Tampilkan</span>
            <select className="bg-white text-[#999999] p-1 px-2 py-2 rounded-md ml-2">
              <option>Urut Berdasarkan</option>
              <option>Filter 2</option>
            </select>
          </div>
        </div>

        {/* Tabel start */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-8 mt-4">
          <table className="w-full relative text-left rtl:text-right bg-white">
            <thead className="">
              <tr className="border-b-10">
                <th scope="col" className="px-6 py-3 font-semibold">
                  Judul Artikel
                </th>
                <th scope="col" className="px-6 py-3 text-semibold">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3 text-semibold">
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6  py-3 text-semibold text-right pr-6"
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 w-5/12">
                  <div className="flex gap-x-2 items-center">
                    <img
                      src={PlaceImage}
                      width={180}
                      alt=""
                      className="object-fill h-5/12"
                    />
                    <h1 className="flex flex-wrap">
                      Memaknai Wayang sebagai Khazanah Budaya Nusantara Masa
                      Kini
                    </h1>
                  </div>
                </th>
                <td className="px-6 py-4">12 November 2023</td>
                <td className="px-6 py-4 font-base text-[#999999]">
                  <div className="flex items-center">
                    <VisibilityIcon fontSize="medium" />
                    &nbsp;<span>20</span>
                    <TextsmsIcon fontSize="small" className="ml-3" />
                    &nbsp;<span>20</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-[#999999]">
                  <div className="flex justify-end">
                    <InfoIcon
                      className="hover:text-slate-500"
                      onClick={handlePopupInfo}
                    />

                    {/* popup Info start */}
                    {isPopupInfoOpen && (
                      <div>
                        <div className="fixed inset-0 flex items-center justify-center z-40">
                          <div
                            className="absolute inset-0 bg-gray-800 opacity-50"
                            onClick={() => setIsPopupInfoOpen(false)}
                          ></div>
                          <div className="w-4/12 bg-white p-4 pb-8 rounded-[15px] z-50">
                            <h1 className="text-black text-left font-semibold text-xl">
                              Detail
                            </h1>
                            <hr className="h-[2px] bg-[#828282] mt-3" />
                            <div className="text-left flex mt-4 justify-between mx-4 mb-5">
                              <div className="w-1/2">
                                <h1 className="font-semibold text-black text-md">
                                  Judul Artikel
                                </h1>
                                <p className="text-left text-sm">
                                  Memaknai Wayang sebagai Khazanah Budaya
                                  Nusantara Masa Kini
                                </p>
                              </div>
                              <div className="w-1/2 pl-2">
                                <h1 className="font-semibold text-black text-md">
                                  Jumlah Pembaca
                                </h1>
                                <p className="text-sm">12</p>
                              </div>
                            </div>
                            <div className="text-left flex justify-between mx-4 mb-5">
                              <div className="w-1/2">
                                <h1 className="font-semibold text-black text-md">
                                  Tanggal Unggah
                                </h1>
                                <p className="text-sm">12 November 2023</p>
                              </div>
                              <div className="w-1/2 pl-2">
                                <h1 className="font-semibold text-black text-md">
                                  Jumlah Like
                                </h1>
                                <p className="text-sm">8</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* popup Hapus end */}
                    <DeleteIcon
                      className="hover:text-slate-500"
                      onClick={handlePopupHapus}
                    />
                  </div>
                  {/* popup Hapus start */}
                  {isPopupHapusOpen && (
                    <div>
                      <div className="fixed inset-0 flex items-center justify-center z-40">
                        <div
                          className="absolute inset-0 bg-gray-800 opacity-50"
                          onClick={() => setIsPopupHapusOpen(false)}
                        ></div>
                        <div className="w-4/12 bg-white p-4 pb-8 rounded-[15px] z-50">
                          <div className="flex justify-center">
                            <img src={imageDelete} alt="" />
                          </div>
                          <h1 className="text-center text-black font-semibold text-xl">
                            Yakin Hapus Artikel?
                          </h1>
                          <h1 className="text-center text-sm">
                            Sekalinya kamu menghapus, Artikel tidak akan
                            kembali, loh
                          </h1>
                          <div className="flex items-center justify-center gap-x-3 mt-5">
                            <button
                              onClick={() => setIsPopupHapusOpen(false)}
                              className="bg-[#3653B0] py-2 px-8 rounded-full text-white font-medium"
                            >
                              Urungkan
                            </button>
                            <button className="bg-[#FF3B3B] py-2 px-10 rounded-full text-white font-medium">
                              Hapus Data
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* popup Hapus end */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Tabel end */}
      </main>
    </section>
  );
}

export default KelolaArtikel;
