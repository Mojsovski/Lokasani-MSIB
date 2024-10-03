import React from "react";
import { useNavigate } from "react-router-dom";
import object1 from "../../assets/img/fitur-event-1.png";
import object2 from "../../assets/img/fitur-event-2.png";
import object3 from "../../assets/img/fitur-event-3.png";

const Eventfeature = () => {
  const navigate = useNavigate();

  const handleRegistrasi= () => {
    navigate("/auth/register/toko/form");
  };

  return (
    <div className="">
      <div className="h-[1000px] mx-auto relative justify-center items-center overflow-hidden  ">
        <div className="text-6xl font-bold uppercase text-white px-20 pt-[100px] flex justify-between">
          <div className="headline-2">
            <div className="flex">
              <h1 className="text-black">
                Jelajahi Fitur
                <span className="text-[#F3B502]"> Event creator </span>{" "}
                <span>lokasani</span>
              </h1>
            </div>
          </div>

          <div className="font-medium text-[30px] justify-end items-center">
            <button className="bg-[#F3B502] p-5 rounded-[20px]"
            onClick={handleRegistrasi}>
              Daftar Sekarang!
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-20 relative z-10 m-40">
          <div className="grid grid-cols-3  ">
            <div className="mr-6">
              <a className="flex flex-col items-center justify-center max-w-[450px] h-[400px] px-5  border border-gray-200 rounded-[20px] shadow bg-[#768DD5] ">
                <img src={object1} alt="" />
              </a>
              <p className="text-[20px] font-semibold text-black  pt-10">
                Ketahui Detail Lokasi Event dengan Mudah!
              </p>
              <p className="text-[15px] font-regular text-black mr-7 pt-2 text-justify">
                Atur denah acaramu tanpa ribet. Berikan pengunjung petunjuk yang
                jelas dan buat setiap event tak terlupakan!
              </p>
            </div>

            <div className="">
              <a className=" flex flex-col items-center justify-center max-w-[450px] h-[400px]  px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#768DD5] ">
                <img src={object2} alt="" />
              </a>
              <p className="text-[20px] font-semibold text-black  pt-10">
                Daftarkan Merch Terbaikmu
              </p>
              <p className="text-[15px] font-regular text-black pt-2 text-justify">
                Pamerkan Kreativitasmu! Daftarkan Merch Terbaik dalam Sekejap di
                Lokasani. Ayo tunjukkan keunikan dari event kamu.
              </p>
            </div>

            <div className="ml-6">
              <a className=" flex flex-col items-center justify-center max-w-[450px] h-[400px]  px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#768DD5] ">
                <img src={object3} alt="" />
              </a>
              <p className="text-[20px] font-semibold text-black ml-5 pt-10">
                Lebih Dekat dengan Pengunjung!
              </p>
              <p className="text-[15px] font-regular text-black ml-5 pt-2 text-justify">
                Dengarkan pengalaman pengunjung setelah mereka hadir di eventmu!
                Buat pengalaman itu menjadi pembelajaran buat kamu kedepannya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventfeature;
