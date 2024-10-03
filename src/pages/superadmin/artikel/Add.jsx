/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../component/superadmin/globalComponent/Sidebar";
import Navbar from "../../../component/superadmin/artikel/Navbar";
import AddIcon from "@mui/icons-material/Add";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import imageSearching from "../../../assets/img/image-searching.png";

function Add() {
  const navigate = useNavigate();

  // function thumbnail
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [isPopupThumbnailOpen, setIsPopupThumbnailOpen] = useState(false);

  const handleThumbnailUpload = (event) => {
    setIsPopupThumbnailOpen(false);
    console.log(thumbnail);
  };
  const handlePopupUploadThumbnail = () => {
    setIsPopupThumbnailOpen(true);
  };
  const handleFileThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setThumbnail(file);
  };
  const handleDragOverThumbnail = (event) => {
    event.preventDefault();
  };
  const handleDropThumbnail = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setThumbnail(file);
  };
  const handleThumbnailClick = () => {
    document.getElementById("uploadThumbnail").click();
  };

  // function Foto Penulis
  const [fotoPenulis, setFotoPenulis] = useState(null);
  const [penulisPreview, setPenulisPreview] = useState(null);
  const handleFotoPenulisChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPenulisPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    console.log(file);
    setFotoPenulis(file);
  };

  // Function Unggah
  const [unggah, setUnggah] = useState(null);
  const [isPopupUnggahOpen, setIsPopupUnggahOpen] = useState(false);
  const handleUnggah = (event) => {
    setIsPopupUnggahOpen(false);
    console.log(unggah);
  };
  const handlePopupUnggah = () => {
    setIsPopupUnggahOpen(true);
  };

  return (
    <section>
      <Sidebar />
      <Navbar title="Tulis Artikel" />
      <main className="pt-[100px] h-full sm:ml-[249px] bg-[#D9D9D9]">
        <div className="mx-5 bg-white rounded-md mt-2 px-6 pt-6 pb-3">
          <div className="flex gap-x-3 mb-4 w-full">
            <div className="h-[310px] w-[500px] rounded-[15px] flex flex-col justify-center items-center bg-white outline-dashed outline-1 outline-[#828282]">
              <div className="bg-[#768DD5] w-10 h-10 flex justify-center items-center rounded-md">
                <AddAPhotoIcon className="text-white" />
              </div>
              <label className="text-[#768DD5] mt-3">
                Unggah thumbnail artikel di sini*
              </label>
              <input
                type="file"
                accept="image/*"
                id="thumbnail"
                onChange={handleThumbnailUpload}
                className="hidden"
              />
              <p className="text-[#828282] text-sm mb-2">
                *Upload gambar untuk artikel Max ukuran 500kb
              </p>
              {thumbnail && (
                <span className="ml-2 text-gray-500 mb-2">
                  {thumbnail.name}
                </span>
              )}
              <button
                onClick={handlePopupUploadThumbnail}
                className="bg-[#3653B0] text-white py-2 px-3 rounded-full hover:bg-[#768DD5]"
              >
                <AddIcon /> Unggah Gambar
              </button>
              {/* popup poster start */}
              {isPopupThumbnailOpen && (
                <div>
                  <div className="fixed inset-0 flex items-center justify-center z-40">
                    <div
                      className="absolute inset-0 bg-gray-800 opacity-50"
                      onClick={() => setIsPopupThumbnailOpen(false)}
                    ></div>
                    <div
                      className="w-5/12 bg-white p-4 rounded-lg z-50"
                      onDragOver={handleDragOverThumbnail}
                      onDrop={handleDropThumbnail}
                    >
                      <h1 className="text-xl font-semibold mb-3 pb-2 border-b-2">
                        Unggah Gambar
                      </h1>
                      <div
                        className="rounded-lg text-center"
                        onClick={handleThumbnailClick}
                      >
                        {thumbnailPreview ? (
                          <img
                            src={thumbnailPreview}
                            alt="Preview"
                            className="w-60 h-52 mx-auto cursor-pointer"
                          />
                        ) : (
                          <img
                            src={imageSearching}
                            alt="Searching"
                            className="w-60 h-52 mx-auto cursor-pointer"
                          />
                        )}
                      </div>
                      <div className="flex justify-center flex-col items-center my-3">
                        <label
                          htmlFor="uploadThumbnail"
                          className="font-bold cursor-pointer text-[24px]"
                        >
                          Tarik dan Lepaskan Gambar
                        </label>
                        <p className="text-[14px] text-[#828282]">
                          *Unggah gambar untuk poster event kamu Max ukuran
                          500kb
                        </p>
                        <input
                          type="file"
                          id="uploadThumbnail"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileThumbnailChange}
                        />
                      </div>
                      <div>
                        <div className="mt-4 flex justify-center">
                          <button
                            className="w-5/12 px-4 py-2 rounded-[20px] focus:outline-none text-white bg-[#253E8D]"
                            onClick={() => handleThumbnailUpload()}
                          >
                            Tambahkan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* popup poster end */}
            </div>
            <div className="ml-7 w-1/2">
              <div>
                <label
                  htmlFor="judul"
                  className="text-[#768DD5] font-semibold text-[20px]"
                >
                  Judul Artikel
                </label>
                <br />
                <input
                  type="text"
                  id="judul"
                  placeholder="Judul..."
                  className="bg-[#F2F2F2] rounded-[12px] py-2 px-4 w-full mt-1 mb-5"
                />
              </div>
              <div>
                <label
                  htmlFor="penulis"
                  className="text-[#768DD5] font-semibold text-[20px]"
                >
                  Penulis Artikel
                </label>
                <br />
                <input
                  type="text"
                  id="penulis"
                  placeholder="Penulis..."
                  className="bg-[#F2F2F2] rounded-[12px] py-2 px-4 w-full mt-1 mb-5"
                />
              </div>
              <div className="flex">
                <div className="h-[120px] w-[120px] rounded-lg border-dashed border-[2px] border-[#828282] flex justify-center items-center">
                  {fotoPenulis !== null ? (
                    <img
                      src={penulisPreview}
                      alt=""
                      className="object-contain	"
                      height={120}
                      width={120}
                    />
                  ) : (
                    <div className="w-8 h-8 bg-[#768DD5] flex items-center justify-center rounded-md">
                      <AddAPhotoIcon className="text-white" />
                    </div>
                  )}
                </div>
                <div className="ml-5 pt-3">
                  <h1 className="text-[#768DD5] font-semibold">
                    Unggah foto penulis artikel di sini*
                  </h1>
                  <h1 className="text-[#828282] text-sm mb-4">
                    *Upload gambar Max ukuran 500kb
                  </h1>
                  <label
                    htmlFor="fotoPenulis"
                    className="bg-[#3653B0] cursor-pointer text-white rounded-full px-3 py-1 mt-"
                  >
                    + Unggah
                  </label>
                  <input
                    type="file"
                    id="fotoPenulis"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFotoPenulisChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 pb-4">
          <textarea
            name=""
            id=""
            cols="30"
            rows="16"
            className="w-full rounded-md py-4 px-3 resize-none"
            placeholder="Tulis isi artikel di sini"
          />
          <div className="flex justify-between mt-3">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="bg-[#E8644B] text-white px-10 rounded-full py-1"
            >
              Batal
            </button>
            <div>
              <button
                onClick={handlePopupUnggah}
                className="bg-[#3653B0] text-white px-10 rounded-full py-1"
              >
                Unggah
              </button>
              {/* popup Unggah start */}
              {isPopupUnggahOpen && (
                <div>
                  <div className="fixed inset-0 flex items-center justify-center z-40">
                    <div
                      className="absolute inset-0 bg-gray-800 opacity-50"
                      onClick={() => setIsPopupUnggahOpen(false)}
                    ></div>
                    <div className="w-3/12 bg-white p-4 pb-8 rounded-[15px] z-50">
                      <h1 className="text-2xl px-5 text-center mt-3 font-semibold mb-3 pb-2 border-b-2">
                        Unggah artikel?
                      </h1>
                      <div className="flex items-center justify-center gap-x-3">
                        <button
                          onClick={() => setIsPopupUnggahOpen(false)}
                          className="bg-[#828282] py-2 px-8 rounded-full text-white font-medium"
                        >
                          Tidak
                        </button>
                        <button className="bg-[#3653B0] py-2 px-10 rounded-full text-white font-medium">
                          Ya
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* popup Unggah end */}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Add;
