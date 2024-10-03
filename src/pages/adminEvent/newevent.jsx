/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import user from "../../assets/img/user.svg";
import Sidebar from "../../component/adminEvent/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import imageSearching from "../../assets/img/image-searching.png";
import imageGmaps from "../../assets/img/img-gmaps.png";
import Ticket from "../../component/adminEvent/addNewEvent/Ticket";
import CloseIcon from "@mui/icons-material/Close";

function NewEvent() {
  const navigate = useNavigate();
  // function poster
  const [poster, setPoster] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null);
  const [isPopupPosterOpen, setIsPopupPosterOpen] = useState(false);

  const handlePosterUpload = (event) => {
    setIsPopupPosterOpen(false);
    console.log(poster);
  };
  const handlePopupUploadPoster = () => {
    setIsPopupPosterOpen(true);
  };
  const handleFilePosterChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPosterPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setPoster(file);
  };
  const handleDragOverPoster = (event) => {
    event.preventDefault();
  };
  const handleDropPoster = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPosterPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setPoster(file);
  };
  const handlePosterClick = () => {
    document.getElementById("uploadPoster").click();
  };

  // function gueststar
  const [guest, setGuest] = useState([]);
  const [nameGuest, setNameGuest] = useState("");
  const [jobGuest, setJobGuest] = useState("");
  const [imageGuestPreview, setImageGuestPreview] = useState(null);
  const [isPopupGuestOpen, setIsPopupGuestOpen] = useState(false);

  const handleGuestUpload = (event) => {
    event.preventDefault();
    setIsPopupGuestOpen(false);
    setGuest([
      ...guest,
      { name: nameGuest, job: jobGuest, image: imageGuestPreview },
    ]);
    setNameGuest("");
    setJobGuest("");
    setImageGuestPreview(null);
    console.log(guest);
  };
  const handlePopupUploadGuest = () => {
    setIsPopupGuestOpen(true);
  };
  const handleFileGuestChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageGuestPreview(reader.result);
        setGuest([
          ...guest,
          { name: nameGuest, job: jobGuest, image: reader.result },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDragOverGuest = (event) => {
    event.preventDefault();
  };
  const handleDropGuest = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageGuestPreview(reader.result);
        setGuest([
          ...guest,
          { name: nameGuest, job: jobGuest, image: reader.result },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleGuestClick = () => {
    document.getElementById("uploadGuest").click();
  };
  const handleCloseGuestIconClick = () => {
    setGuest(null);
    setImageGuestPreview(null);
  };

  // function Gmaps
  const [gmaps, setGmaps] = useState(null);
  const [isPopupGmapsOpen, setIsPopupGmapsOpen] = useState(false);
  const handleGmapsUpload = (event) => {
    setIsPopupGmapsOpen(false);
    console.log(gmaps);
  };
  const handlePopupUploadGmaps = () => {
    setIsPopupGmapsOpen(true);
  };

  // function Denah Lokasi
  const [denah, setDenah] = useState(null);
  const [isPopupDenahOpen, setIsPopupDenahOpen] = useState(false);
  const handleDenahUpload = (event) => {
    setIsPopupDenahOpen(false);
  };
  const handlePopupUploadDenah = () => {
    setIsPopupDenahOpen(true);
  };
  const handleDenahChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDenah(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // function Tambah Tiket
  const [isPopupAddTiketOpen, setIsPopupAddTiketOpen] = useState(false);
  const handleAddTiketUpload = (event) => {
    setIsPopupAddTiketOpen(false);
  };
  const handlePopupUploadAddTiket = () => {
    setIsPopupAddTiketOpen(true);
  };
  const [tiket, setTiket] = useState([]);
  const [formTiket, setFormTiket] = useState({
    namaTiket: "",
    jenisTiket: "",
    jumlahTiket: "",
    hargaTiket: "",
    deskripsiTiket: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });
  const handleChangeTiket = (e) => {
    const { id, value } = e.target;
    setFormTiket((prevData) => ({ ...prevData, [id]: value }));
  };
  const handleDateChange = (date, type) => {
    setFormTiket((prevData) => ({ ...prevData, [type]: date }));
  };
  const handleTimeChange = (time, type) => {
    setFormTiket((prevData) => ({ ...prevData, [type]: time }));
  };
  const handleSubmitTiket = (e) => {
    e.preventDefault();
    setTiket((prevData) => [...prevData, formTiket]);
    setFormTiket({
      namaTiket: "",
      jenisTiket: "",
      jumlahTiket: "",
      hargaTiket: "",
      deskripsiTiket: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    });
    setIsPopupAddTiketOpen(false);
  };
  const handleDeleteTiket = (index) => {
    setTiket((prevData) => prevData.filter((_, i) => i !== index));
  };

  // function Import File
  const [importFile, setImportFile] = useState();
  const [isPopupImportFileOpen, setIsPopupImportFileOpen] = useState(false);
  const handleImportFileUpload = (event) => {
    setIsPopupImportFileOpen(false);
    console.log(importFile);
  };
  const handleImportFileChange = (e) => {
    const file = e.target.files[0];
    setImportFile(file);
  };
  const handlePopupUploadImportFile = () => {
    setIsPopupImportFileOpen(true);
  };

  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  // function Merch
  const handleMerchInputChange = (index, field, value) => {
    setMerchSection((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[index] = {
        ...updatedSections[index],
        [field]: value,
      };
      return updatedSections;
    });
  };
  const handleMerchImageUpload = (index, file) => {
    setMerchSection((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[index] = {
        ...updatedSections[index],
        merchPoster: file,
      };
      return updatedSections;
    });
  };
  const [merchSection, setMerchSection] = useState([]);
  const handleMerchButtonClick = () => {
    setMerchSection((prevSections) => [...prevSections, {}]);
  };
  console.log(merchSection);
  const handleRemoveMerchSection = (indexToRemove) => {
    setMerchSection((prevSections) =>
      prevSections.filter((_, index) => index !== indexToRemove)
    );
  };

  const [namaDescription, setNamaDescription] = useState("");
  const [alamatDescription, setAlamatDescription] = useState("");

  // fungsi tanggal mulai-selesai
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  // fungsi gomaps
  const [showGoogleMaps, setShowGoogleMaps] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState([]);

  // Your handleOptionChange function
  const handleOptionChange = (option) => {
    const isOptionSelected = selectedOptions.includes(option);

    if (isOptionSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const newData = {
      tanggal_diajukan: "",
      status: "pending",
      name: eventName,
      jenis_event: eventType,
      deskirpsi: eventDescription,
      poster: poster,
      denah: denah,
      nama_venue: namaDescription,
      alamat_venue: alamatDescription,
      start_date: startDate,
      end_date: endDate,
      start_time: startTime,
      end_time: endDate,
      guest: guest,
      tiket: tiket,
      merch: merchSection,
    };
    try {
      const response = await axios.post(
        "https://657c05c8394ca9e4af153c42.mockapi.io/draftevent",
        newData
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Berhasil Menambah Event",
          confirmButtonText: "OK",
        });
        console.log("Data berhasil ditambahkan:", response.data);
        navigate("/adminevent/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal Registrasi",
        confirmButtonText: "OK",
      });
    }
    console.log(newData);
  };

  return (
    <section>
      <Sidebar />
      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        {/* header start */}
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className="pl-5">
            <h1 className="text-4xl font-bold">Tambah Event Baru</h1>
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
        <div className="bg-gray-200 pl-3 pr-3">
          <div className="grid grid-cols-1 gap-1 p-2">
            <div className="col-span-1 bg-white p-4 rounded-md relative">
              <h1 className="text-3xl font-bold mt-2 text-[30px] ml-4">
                Tentang Eventmu
              </h1>
              <span className="text-[#999999] ml-4">
                Masukkan detail event-mu di sini!
              </span>

              <div className="flex items-center space-x-8 justify-center">
                {/* Kolom Unggah */}
                <div className="border-dashed border-2 w-1/2 h-[300px] border-gray-400 p-8 rounded-md aspect-w-1 aspect-h-1">
                  <div className="flex flex-col items-center">
                    <AddAPhotoIcon className="text-[#768DD5] mt-10" />
                    <h1 className="text-3xl font-bold text-sm mt-1">
                      Unggah poster Event Anda di sini
                    </h1>
                    <h1 className="block text-xs mt-1 font-medium text-center text-[#828282] ">
                      Upload gambar untuk poster event kamu Max ukuran 500kb
                    </h1>
                    <div className="mt-2 flex flex-col items-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePosterUpload}
                        id="poster"
                        className="hidden"
                      />
                      {poster && (
                        <span className="ml-2 text-gray-500 mb-2">
                          {poster.name}
                        </span>
                      )}
                      <button
                        onClick={handlePopupUploadPoster}
                        htmlFor="poster"
                        className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2"
                      >
                        Unggah Poster
                      </button>

                      {/* popup poster start */}
                      {isPopupPosterOpen && (
                        <div>
                          <div className="fixed inset-0 flex items-center justify-center z-40">
                            <div
                              className="absolute inset-0 bg-gray-800 opacity-50"
                              onClick={() => setIsPopupPosterOpen(false)}
                            ></div>
                            <div
                              className="w-5/12 bg-white p-4 rounded-lg z-50"
                              onDragOver={handleDragOverPoster}
                              onDrop={handleDropPoster}
                            >
                              <h1 className="text-xl font-semibold mb-3 pb-2 border-b-2">
                                Unggah Gambar
                              </h1>
                              <div
                                className="rounded-lg text-center"
                                onClick={handlePosterClick}
                              >
                                {posterPreview ? (
                                  <img
                                    src={posterPreview}
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
                                  htmlFor="uploadPoster"
                                  className="font-bold cursor-pointer"
                                >
                                  Tarik dan Lepaskan Poster
                                </label>
                                <p className="text-[14px] text-[#828282]">
                                  *Unggah gambar untuk poster event kamu Max
                                  ukuran 500kb
                                </p>
                                <input
                                  type="file"
                                  id="uploadPoster"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={handleFilePosterChange}
                                />
                              </div>
                              <div>
                                <div className="mt-2 flex justify-center">
                                  <button
                                    className="w-5/12 px-4 py-2 rounded-[20px] focus:outline-none text-white bg-[#253E8D]"
                                    onClick={() => handlePosterUpload()}
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
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md flex flex-col">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-1 " style={{ width: "400px" }}>
                      <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                        Nama*
                      </h1>
                      <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Nama..."
                        className="bg-[#F2F2F2] mt-2 p-2 rounded-md w-full"
                      />
                    </div>
                    <div className="col-span-1">
                      <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                        Jenis Event*
                      </h1>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="bg-[#F2F2F2] mt-2 p-2 rounded-md w-full text-[#828282]"
                      >
                        <option value="">Pilih Jenis Event</option>
                        <option value="Conference">Conference</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Seminar">Seminar</option>
                      </select>
                    </div>
                    <div className="col-span-1 " style={{ width: "400px" }}>
                      <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                        Deskripsi*
                      </h1>
                      <textarea
                        type="text"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        placeholder="Deskirpsi..."
                        className="bg-[#F2F2F2] mt-2 resize-none py-2 pl-2 pr-2 rounded-md w-full"
                        rows={5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* lokasi event start */}
          <div className="grid grid-cols-2 gap-3 p-2">
            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
              <h1 className="text-3xl font-bold text-2xl ml-3 mt-5">
                Lokasi Event
              </h1>
              <span className="text-[#999999] text-sm ml-3 mt-5">
                Jabarkan lokasi event Anda di sini!
              </span>
              {/* <div className="mt-3 p-3">
                <img src={imageGmaps} alt="Maps" />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handlePopupUploadGmaps}
                  className="mt-2 mx-auto cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 rounded-full w-11/12"
                >
                  + Unggah Link Venue (Gomaps)
                </button> */}

              {/* popup Gmaps start */}
              {isPopupGmapsOpen && (
                <div>
                  <div className="fixed inset-0 flex items-center justify-center z-40">
                    <div
                      className="absolute inset-0 bg-gray-800 opacity-50"
                      onClick={() => setIsPopupGmapsOpen(false)}
                    ></div>
                    <div className="w-6/12 bg-white p-4 rounded-lg z-50">
                      <h1 className="text-2xl px-5 mt-3 font-semibold mb-3 pb-2 border-b-2">
                        Unggah Link Lokasi Gmaps
                      </h1>
                      <div className="mx-auto mt-3 flex items-center justify-center rounded-lg text-center w-[600px] h-[222px] border-dashed border-[#828282]">
                        <label className="text-[#828282] text-sm">
                          * Maps akan muncul setelah kamu unggah link Google
                          Maps Venue
                        </label>
                      </div>
                      <div className="flex flex-col items-start mt-4 px-5">
                        <label
                          className="font-semibold text-xl"
                          htmlFor="uploadGmaps"
                        >
                          Tambahkan Link Google Maps Venue
                        </label>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between mt-2 px-5 w-full">
                          <input
                            type="text"
                            id="uploadGmaps"
                            className="outline outline-1 outline-[#828282] rounded-full w-8/12 px-4"
                            placeholder="https://maps"
                            onChange={(e) => setGmaps(e.target.value)}
                          />
                          <button
                            className="px-10 py-2 rounded-[20px] focus:outline-none text-white bg-[#253E8D]"
                            onClick={() => handleGmapsUpload()}
                          >
                            Tambahkan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* popup Gmaps end */}
              {/* </div> */}
              <div className="flex justify-between mt-3 ml-3">
                <div className="col-span-1 p-2 " style={{ width: "240px" }}>
                  <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                    Nama Venue*
                  </h1>
                  <textarea
                    type="text"
                    value={namaDescription}
                    onChange={(e) => setNamaDescription(e.target.value)}
                    placeholder="Nama venue..."
                    className="bg-[#F2F2F2] mt-2 p-5 resize-none rounded-md w-full"
                  />
                </div>
                <div className="col-span-1 p-2 mr-3" style={{ width: "240px" }}>
                  <h1 className="text-3xl font-bold text-sm text-[#768DD5]">
                    Alamat Venue*
                  </h1>
                  <textarea
                    type="text"
                    value={alamatDescription}
                    onChange={(e) => setAlamatDescription(e.target.value)}
                    placeholder="Alamat venue..."
                    className="bg-[#F2F2F2] mt-2 p-5 resize-none rounded-md w-full"
                  />
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <button
                  onClick={handlePopupUploadDenah}
                  className="mt-2 mx-auto cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 rounded-full w-11/12"
                >
                  + Unggah Denah Lokasi
                </button>
                {/* popup Denah Lokasi start */}
                {isPopupDenahOpen && (
                  <div>
                    <div className="fixed inset-0 flex items-center justify-center z-40">
                      <div
                        className="absolute inset-0 bg-gray-800 opacity-50"
                        onClick={() => setIsPopupDenahOpen(false)}
                      ></div>
                      <div className="w-6/12 bg-white p-4 rounded-[24px] z-50">
                        <h1 className="text-2xl px-5 mt-3 font-semibold mb-3 pb-2 border-b-2">
                          Unggah Denah Lokasi
                        </h1>
                        <div className="mx-auto mt-3 flex items-center justify-center rounded-lg text-center w-[600px] h-[222px] border-dashed border-[#828282]">
                          {denah ? (
                            <img src={denah} alt="" className=" w-[300px]" />
                          ) : (
                            <label className="text-[#828282] text-sm">
                              *Gambar Denah akan Muncul setelah Anda Unggah Foto
                              Denah
                            </label>
                          )}
                        </div>
                        <div className="mb-2">
                          <div className="mt-4 px-5 w-full flex flex-col">
                            <div className="w-full text-center bg-[#3653B0] py-2 rounded-full cursor-pointer">
                              <label
                                htmlFor="thumbnailDenah"
                                className="text-white text-center cursor-pointer"
                              >
                                + Unggah Gambar Thumbnail Denah Venue
                              </label>
                            </div>
                            <input
                              type="file"
                              id="thumbnailDenah"
                              onChange={handleDenahChange}
                              className="hidden"
                              accept="image/*"
                            />
                            {/* <div className="w-full mt-2 text-center bg-[#3653B0] py-2 rounded-full cursor-pointer">
                              <label
                                htmlFor="denahPDF"
                                className="text-white text-center cursor-pointer"
                              >
                                + Unggah Denah Venue (PDF)
                              </label>
                            </div>

                            <input
                              type="file"
                              id="denahPDF"
                              className="hidden"
                              accept=".pdf"
                            /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* popup Denah Lokasi end */}
              </div>
            </div>
            {/* lokasi event end */}

            {/* Waktu event */}
            <div className="grid grid-cols-1 gap-1">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
                <h1 className="text-3xl font-bold mt-2">Waktu Event</h1>
                <span className="text-[#999999] ml-1 text-sm">
                  Kapan Event Anda dilaksanakan?
                </span>
                <div className="grid grid-cols-2">
                  <div className="mt-4">
                    <label className="block text-medium font-semibold text-[#768DD5] mb-2">
                      Tanggal Mulai*
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="bg-[#F2F2F2] px-2 pl-3 w-11/12 rounded-[10px]"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-medium font-semibold text-[#768DD5] mb-2">
                      Tanggal Selesai*
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="bg-[#F2F2F2] px-2 pl-3 w-11/12 rounded-[10px]"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-medium font-semibold text-[#768DD5] mb-2">
                      Jam Mulai*
                    </label>
                    <AccessAlarmIcon
                      fontSize="small"
                      className="absolute ml-[8px] mt-[2px] z-10 text-[#828282]"
                    />
                    <DatePicker
                      selected={startTime}
                      onChange={(time) => setStartTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="HH:mm"
                      className="bg-[#F2F2F2] px-2 pl-8 w-11/12 rounded-[10px]"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-medium font-semibold text-[#768DD5] mb-2">
                      Jam Selesai*
                    </label>
                    <AccessAlarmIcon
                      fontSize="small"
                      className="absolute ml-[8px] mt-[2px] z-10 text-[#828282]"
                    />
                    <DatePicker
                      selected={endTime}
                      onChange={(time) => setEndTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="HH:mm"
                      className="bg-[#F2F2F2] px-2 pl-8 w-11/12 rounded-[10px]"
                    />
                  </div>
                </div>
              </div>

              {/* Guest start */}
              <div className="bg-white mt-2 pb-6 p-4 rounded-md">
                <div>
                  <div>
                    <h1 className="text-3xl font-bold">Guest Star</h1>
                    <span className="text-[#999999] ml-1 text-sm">
                      Tambahkan Pemeriah Acara!
                    </span>
                  </div>
                </div>
                <div className="flex relative mt-5 justify-center pb-3">
                  <div className="border-dashed w-[180px] h-32 border-2 mt-2 flex items-center justify-center border-gray-400 p-5 py-7 mx-2 rounded-[24px]">
                    <label
                      onClick={handlePopupUploadGuest}
                      className="block cursor-pointer text-sm font-medium text-center py-auto text-[#828282]"
                    >
                      + Tambah Guest Star
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="guest"
                      onChange={handleFileGuestChange}
                      className="hidden"
                    />
                  </div>
                  <div className="flex overflow-x-auto pb-1">
                    {guest.map((guest, index) => (
                      <div
                        key={index}
                        className="rounded-md h-32 w-[180px] flex  mt-2 mx-2 bg-light-yellow rounded-[24px] shadow-md hover:bg-tan ring-[#768DD5] ring-1"
                      >
                        {/* <CloseIcon
                          fontSize="small"
                          className="absolute -mt-[8px] bg-[#3653B0] rounded-full text-white -mr-[10px] right-0 cursor-pointer"
                        /> */}
                        <img
                          src={guest.image}
                          alt={`Guest ${index + 1}`}
                          className="object-cover w-[200px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* popup guest start */}
                {isPopupGuestOpen && (
                  <div>
                    <div className="fixed inset-0 flex items-center justify-center z-40">
                      <div
                        className="absolute inset-0 bg-gray-800 opacity-50"
                        onClick={() => setIsPopupGuestOpen(false)}
                      ></div>
                      <div
                        className="w-5/12 bg-white p-4 rounded-lg z-50"
                        onDragOver={handleDragOverGuest}
                        onDrop={handleDropGuest}
                      >
                        <h1 className="text-xl font-semibold mb-3 pb-2 border-b-2">
                          Tambah Guest Star
                        </h1>
                        <div className="rounded-lg text-center">
                          <div className="flex w-full justify-between mb-5">
                            <div className="flex flex-col">
                              <label
                                htmlFor="namaGuest"
                                className="text-left text-[#768DD5] font-semibold"
                              >
                                Nama Guest Star
                              </label>
                              <input
                                type="text"
                                id="namaGuest"
                                value={nameGuest}
                                required
                                onChange={(e) => setNameGuest(e.target.value)}
                                placeholder="Nama guest..."
                                className="bg-[#F2F2F2] px-3 py-2 rounded-md text-sm"
                              />
                            </div>
                            <div className="flex flex-col">
                              <label
                                htmlFor="peranGuest"
                                className="text-left text-[#768DD5] font-semibold"
                              >
                                Peran Guest Star
                              </label>
                              <input
                                type="text"
                                id="peranGuest"
                                required
                                value={jobGuest}
                                onChange={(e) => setJobGuest(e.target.value)}
                                placeholder="Peran guest..."
                                className="bg-[#F2F2F2] px-3 py-2 rounded-md text-sm"
                              />
                            </div>
                            <div></div>
                          </div>
                          {imageGuestPreview ? (
                            <img
                              src={imageGuestPreview}
                              alt="Preview"
                              className="w-52 h-44 mx-auto cursor-pointer"
                              onClick={handleGuestClick}
                            />
                          ) : (
                            <img
                              src={imageSearching}
                              alt="Searching"
                              className="w-52 h-44 mx-auto cursor-pointer"
                              onClick={handleGuestClick}
                            />
                          )}
                        </div>
                        <div className="flex justify-center flex-col items-center my-3">
                          <label
                            htmlFor="uploadGuest"
                            className="font-bold cursor-pointer"
                          >
                            Tarik dan Lepaskan Foto Guest Star
                          </label>
                          <p className="text-[14px] text-[#828282]">
                            *Unggah gambar untuk poster event kamu Max ukuran
                            500kb
                          </p>
                          <input
                            type="file"
                            id="uploadGuest"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileGuestChange}
                          />
                        </div>
                        <div>
                          <div className="mt-2 flex justify-center">
                            <button
                              className="w-5/12 px-4 py-2 rounded-[20px] focus:outline-none text-white bg-[#253E8D]"
                              onClick={handleGuestUpload}
                            >
                              Tambahkan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* popup guest end */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 p-2">
            <div className="col-span-1 bg-white p-4 rounded-md relative">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-3xl font-bold">Detail Tiket</h1>
                  <span className="text-[#999999] text-sm">
                    Jabarkan Tiket yang ingin Anda daftarkan
                  </span>
                </div>
                <button
                  onClick={handlePopupUploadAddTiket}
                  className="cursor-pointer bg-[#3653B0] py-2 hover:bg-blue-800 text-white px-5 rounded-full text-sm"
                >
                  + Tambah Tiket*
                </button>
                {/* popup Tambah Tiket start */}
                {isPopupAddTiketOpen && (
                  <div>
                    <div className="fixed inset-0 flex items-center justify-center z-[70]">
                      <div
                        className="absolute inset-0 bg-gray-800 opacity-50"
                        onClick={() => setIsPopupAddTiketOpen(false)}
                      ></div>
                      <div className="w-5/12 bg-white p-4 rounded-lg z-[80] ">
                        <div className="overflow-y-auto overflow-hidden h-[440px] px-4">
                          <form onSubmit={handleSubmitTiket}>
                            <h1 className="text-2xl mt-3 font-semibold mb-3 pb-2 border-b-2">
                              Detail Tiket
                            </h1>
                            <div>
                              <label
                                htmlFor="namaTiket"
                                className="text-[#768DD5] font-semibold"
                              >
                                Nama Tiket
                              </label>
                              <br />
                              <input
                                required
                                type="text"
                                id="namaTiket"
                                value={formTiket.namaTiket}
                                onChange={handleChangeTiket}
                                placeholder="Nama tiket"
                                className="bg-[#F2F2F2] py-[8px] px-3 mb-2 rounded-lg w-full"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="jenisTiket"
                                className="text-[#768DD5] font-semibold"
                              >
                                Jenis Tiket
                              </label>
                              <br />
                              <input
                                type="text"
                                required
                                id="jenisTiket"
                                value={formTiket.jenisTiket}
                                onChange={handleChangeTiket}
                                placeholder="Jenis tiket"
                                className="bg-[#F2F2F2] py-[8px] px-3 mb-2 rounded-lg w-full"
                              />
                            </div>
                            <div className="flex w-full mb-2">
                              <div className="w-1/2 mr-2">
                                <label
                                  htmlFor="jumlahTiket"
                                  className="text-[#768DD5] font-semibold"
                                >
                                  Jumlah Tiket
                                </label>
                                <br />
                                <input
                                  type="text"
                                  id="jumlahTiket"
                                  required
                                  value={formTiket.jumlahTiket}
                                  onChange={handleChangeTiket}
                                  placeholder="Jumlah tiket"
                                  className="bg-[#F2F2F2] py-[8px] px-3 rounded-lg w-full"
                                />
                              </div>
                              <div className="w-1/2">
                                <label
                                  htmlFor="hargaTiket"
                                  className="text-[#768DD5] font-semibold"
                                >
                                  Harga
                                </label>
                                <br />
                                <input
                                  type="text"
                                  id="hargaTiket"
                                  value={formTiket.hargaTiket}
                                  onChange={handleChangeTiket}
                                  placeholder="Harga"
                                  required
                                  className="bg-[#F2F2F2] py-[8px] px-3 rounded-lg w-full"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="deskripsiTiket"
                                className="text-[#768DD5] font-semibold"
                              >
                                Deskripsi Tiket
                              </label>
                              <br />
                              <textarea
                                name=""
                                id="deskripsiTiket"
                                cols="30"
                                rows="5"
                                required
                                value={formTiket.deskripsiTiket}
                                onChange={handleChangeTiket}
                                placeholder="Deskripsi tiket"
                                className="bg-[#F2F2F2] resize-none py-[8px] px-3 rounded-lg w-full"
                              />
                            </div>
                            <h1 className="text-2xl mt-8 font-semibold mb-3">
                              Waktu Penjualan Tiket
                            </h1>
                            <div className="w-full">
                              <div className="flex mt-4 w-full">
                                <div className="w-1/2">
                                  <label className="block text-medium font-semibold text-[#768DD5] mb-2">
                                    Tanggal Mulai
                                  </label>
                                  <DatePicker
                                    selected={formTiket.startDate}
                                    onChange={(date) =>
                                      handleDateChange(date, "startDate")
                                    }
                                    required
                                    dateFormat="dd/MM/yyyy"
                                    className="bg-[#F2F2F2] px-2 w-[220px] rounded-lg py-[8px]"
                                  />
                                </div>

                                <div className="w-1/2">
                                  <label className="block text-medium font-semibold text-[#768DD5] mb-2">
                                    Tanggal Selesai
                                  </label>
                                  <DatePicker
                                    selected={formTiket.endDate}
                                    onChange={(date) =>
                                      handleDateChange(date, "endDate")
                                    }
                                    required
                                    dateFormat="dd/MM/yyyy"
                                    className="bg-[#F2F2F2] px-2 w-[234px] rounded-lg py-[8px]"
                                  />
                                </div>
                              </div>
                              <div className="flex w-full mt-4">
                                <div className="w-1/2 relative">
                                  <label className="block text-medium font-semibold text-[#768DD5] mb-2">
                                    Jam Mulai
                                  </label>
                                  <AccessAlarmIcon
                                    fontSize="small"
                                    className="absolute ml-[8px] z-[90] mt-[9px] z-10 text-[#828282]"
                                  />
                                  <DatePicker
                                    selected={formTiket.startTime}
                                    onChange={(time) =>
                                      handleTimeChange(time, "startTime")
                                    }
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    required
                                    timeCaption="Time"
                                    dateFormat="HH:mm"
                                    className="bg-[#F2F2F2] px-2 pl-8 w-[220px] rounded-lg py-[8px]"
                                  />
                                </div>

                                <div className="w-1/2 relative">
                                  <label className="block text-medium font-semibold text-[#768DD5] mb-2">
                                    Jam Selesai
                                  </label>
                                  <AccessAlarmIcon
                                    fontSize="small"
                                    className="absolute ml-[8px] z-[90] mt-[9px] text-[#828282]"
                                  />
                                  <DatePicker
                                    selected={formTiket.endTime}
                                    onChange={(time) =>
                                      handleTimeChange(time, "endTime")
                                    }
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    required
                                    dateFormat="HH:mm"
                                    className="bg-[#F2F2F2] px-2 pl-8 w-full rounded-lg py-[8px]"
                                  />
                                </div>
                              </div>
                              <div className="w-full mt-6">
                                <button
                                  type="submit"
                                  className="w-full rounded-full bg-[#3653B0] text-white py-2"
                                >
                                  Buat Tiket
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* popup Tambah Tiket end */}
              </div>

              {/* tiket start */}
              {tiket.map((tiket, index) => (
                <Ticket
                  key={index}
                  tiket={tiket}
                  index={index}
                  onDelete={handleDeleteTiket}
                />
              ))}
              {/* tiket end */}
              <div className="flex w-full">
                <div className="col-span-1 bg-white w-9/12 p-4 rounded-md relative">
                  <h1 className="text-lg font-bold text-[#3653B0]">
                    Formulir Pemesanan*
                  </h1>

                  {/* Nama */}
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="nama"
                      name="option"
                      checked={selectedOptions.includes("nama")}
                      onChange={() => handleOptionChange("nama")}
                      className="mr-2"
                    />
                    <label htmlFor="nama" className="ml-2">
                      Nama Lengkap
                    </label>
                  </div>

                  {/* Email */}
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="email"
                      name="option"
                      checked={selectedOptions.includes("email")}
                      onChange={() => handleOptionChange("email")}
                      className="mr-2"
                    />
                    <label htmlFor="email" className="ml-2">
                      Email
                    </label>
                  </div>

                  {/* Nomor Handphone */}
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="nomorHandphone"
                      name="option"
                      checked={selectedOptions.includes("nomorHandphone")}
                      onChange={() => handleOptionChange("nomorHandphone")}
                      className="mr-2"
                    />
                    <label htmlFor="nomorHandphone" className="ml-2">
                      Nomor Handphone
                    </label>
                  </div>

                  {/* Nomor KTP */}
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="nomorKTP"
                      name="option"
                      checked={selectedOptions.includes("nomorKTP")}
                      onChange={() => handleOptionChange("nomorKTP")}
                      className="mr-2"
                    />
                    <label htmlFor="nomorKTP" className="ml-2">
                      NIK
                    </label>
                  </div>
                </div>
                <div className="col-span-1 w-full bg-white p-4 rounded-md relative">
                  <h1 className="text-lg  font-bold text-[#3653B0]">
                    Pengaturan Tambahan*
                  </h1>
                  <div className="flex items-center justify-between">
                    <h1 className="mr-2 text-3xl font-bold text-sm">
                      Jumlah maks. tiket per transaksi
                    </h1>
                    <select className="bg-white text-[#999999] px-2 py-2 rounded-md outline outline-black outline-1 right-0 ">
                      <option>Jumlah Tiket</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>dll</option>
                    </select>
                  </div>
                  <span className="text-[#999999] text-sm ml-1">
                    Jumlah maksimal tiket yang dapat dibeli dalam 1 transaksi
                  </span>
                  <hr className="h-[1px] mt-6 bg-[#CCCCCC]" />
                  <div className="col-span-1 bg-white  rounded-md relative mt-5">
                    <h1 className="text-3xl font-bold text-sm p-">
                      Pengaturan Tambahan*
                    </h1>
                    <div className="col-span-1 bg-white rounded-md relative">
                      <Brightness1Icon color="primary" sx={{ fontSize: 10 }} />
                      <span className="text-[#999999] ml-1">
                        1 akun email dapat melakukan lebih dari 1 kali transaksi
                      </span>
                    </div>
                    <Brightness1Icon color="primary" sx={{ fontSize: 10 }} />
                    <span className="text-[#999999] ml-1">
                      Data antar tiket tidak boleh sama
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* kolom Tambah Merch */}
          <div className="grid grid-cols-1 gap-1 p-2">
            <div className="col-span-1 bg-white p-4 rounded-md relative">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold">Tambah Merch</h1>
                  <span className="text-[#999999] ml-1 mt-1 text-sm">
                    Masukkan Mech untuk Menambah Keseruan Event Kamu!
                  </span>
                </div>
                <div className="flex">
                  {/* <button
                    onClick={handlePopupUploadImportFile}
                    className="ml-auto cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm"
                  >
                    + Import Data dari File
                  </button> */}
                  {/* popup Import File start */}
                  {isPopupImportFileOpen && (
                    <div>
                      <div className="fixed inset-0 flex items-center justify-center z-40">
                        <div
                          className="absolute inset-0 bg-gray-800 opacity-50"
                          onClick={() => setIsPopupImportFileOpen(false)}
                        ></div>
                        <div className="w-5/12 bg-white py-5 pb-8 rounded-[24px] z-50 px-8">
                          <h1 className="text-xl font-semibold mb-3 pb-2">
                            Tambahkan Data Merch kamu
                          </h1>
                          <button className="w-full bg-[#768DD5] text-white py-2 rounded-full">
                            <DownloadIcon />
                            <span>Unduh Template File</span>
                          </button>
                          <div className="mt-2">
                            <label className="font-medium text-lg">
                              Unggah File di sini
                            </label>
                            <br />
                            <div className="flex justify-between mt-2">
                              <div className="w-[90%] border-[1px] py-2 rounded-full px-4">
                                {importFile ? importFile.name : ""}
                              </div>
                              <div>
                                <label
                                  htmlFor="importFileMerch"
                                  className="bg-[#768DD5] flex items-center justify-center cursor-pointer w-10 h-10 rounded-full"
                                >
                                  <AddIcon
                                    fontSize="large"
                                    className="text-white"
                                  />
                                </label>
                                <input
                                  type="file"
                                  id="importFileMerch"
                                  name="importFileMerch"
                                  accept=".xls, .xlsx"
                                  className="hidden"
                                  onChange={handleImportFileChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center">
                            <input
                              type="checkbox"
                              id="sesuaiTemplate"
                              name="sesuaiTemplate"
                              className="mr-2"
                            />
                            <label
                              htmlFor="sesuaiTemplate"
                              className="text-[#333333] text-xs"
                            >
                              Pastikan file kamu sesuai dengan template yang
                              tersedia
                            </label>
                          </div>
                          <button
                            className="w-full mt-4 py-2 rounded-[20px] focus:outline-none text-white bg-[#253E8D]"
                            onClick={handleImportFileUpload}
                          >
                            Tambah Data Merch
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* popup Import File end */}
                </div>
              </div>
              <div className="col-span-1 bg-white p-3 rounded-md relative">
                {/* Add Merch Start */}
                {merchSection.map((_, index) => (
                  <div key={index}>
                    <div className="grid relative grid-cols-2 flex items-center mt-5 space-x-8">
                      {/* Kolom Unggah */}
                      <div className="absolute right-0 top-0 mr-3">
                        <CloseIcon
                          className="cursor-pointer hover:text-[#999]"
                          onClick={() => handleRemoveMerchSection(index)}
                        />
                      </div>
                      <div className="border-dashed border-2 border-gray-400 p-20 rounded-md aspect-w-1 aspect-h-1">
                        <div className="flex flex-col items-center">
                          <AddAPhotoIcon className="text-[#768DD5]" />
                          <h1 className="text-3xl font-bold text-sm">
                            Unggah poster Event Anda di sini
                          </h1>
                          <h1 className="block text-xs text-center font-medium text-[#828282]">
                            Upload gambar untuk poster event kamu Max ukuran
                            500kb
                          </h1>
                          <div className="mt-5 flex items-center">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                handleMerchImageUpload(index, e.target.files[0])
                              }
                              id={`merchPoster${index}`}
                              className="hidden"
                            />
                            <div className="flex flex-col">
                              {merchSection[index]?.merchPoster && (
                                <span className="text-center text-xs mb-3 text-gray-500">
                                  {merchSection[index].merchPoster.name || ""}
                                </span>
                              )}
                              <label
                                htmlFor={`merchPoster${index}`}
                                className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2"
                              >
                                Unggah Poster
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Kolom Nama sampai Deskripsi */}
                      <div className="bg-white p-4 rounded-md flex flex-col">
                        <div className="flex flex-col gap-y-3 mt-2">
                          <div>
                            <label className="text-3xl font-bold text-sm text-[#768DD5]">
                              Nama Merch
                            </label>
                            <input
                              type="text"
                              value={merchSection[index]?.nama || ""}
                              onChange={(e) =>
                                handleMerchInputChange(
                                  index,
                                  "nama",
                                  e.target.value
                                )
                              }
                              placeholder="Nama"
                              className="bg-[#F2F2F2] mt-2 p-2 rounded-md w-full"
                            />
                          </div>
                          <div>
                            <label className="text-3xl font-bold text-sm text-[#768DD5]">
                              Deskripsi Merch
                            </label>
                            <textarea
                              type="text"
                              value={merchSection[index]?.deskripsi || ""}
                              onChange={(e) =>
                                handleMerchInputChange(
                                  index,
                                  "deskripsi",
                                  e.target.value
                                )
                              }
                              placeholder="Deskripsi"
                              className="bg-[#F2F2F2] mt-2 px-3 py-3 resize-none rounded-md w-full"
                            />
                          </div>
                          <div className="flex">
                            <div className="w-1/2 mx-2">
                              <label className="text-3xl font-bold text-sm text-[#768DD5]">
                                Harga
                              </label>
                              <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span className="text-gray-500 sm:text-sm">
                                    Rp -
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="focus:ring-indigo-500 bg-[#F2F2F2] w-11/12 py-2 focus:border-indigo-500 block w-full pl-11 sm:text-sm border-gray-300 rounded-md"
                                  placeholder="0"
                                  value={merchSection[index]?.harga || ""}
                                  onChange={(e) =>
                                    handleMerchInputChange(
                                      index,
                                      "harga",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="w-1/2 mx-3">
                              <label className="text-3xl font-bold text-sm text-[#768DD5]">
                                Stock
                              </label>
                              <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                  type="text"
                                  className="focus:ring-indigo-500 bg-[#F2F2F2] w-11/12 py-2 focus:border-indigo-500 block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
                                  placeholder="0"
                                  value={merchSection[index]?.stok || ""}
                                  onChange={(e) =>
                                    handleMerchInputChange(
                                      index,
                                      "stok",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Add Merch End */}
                <div className="flex items-center justify-center mt-5">
                  <button
                    onClick={handleMerchButtonClick}
                    className="flex items-center justify-center cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 w-full"
                  >
                    + Tambah Merch
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 p-2">
            <button
              onClick={handleClick}
              className="flex items-center justify-center cursor-pointer bg-[#768DD5] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 w-full"
            >
              Simpan Draft Event
            </button>
          </div>
        </div>

        {/* content end */}
      </main>
    </section>
  );
}

export default NewEvent;
