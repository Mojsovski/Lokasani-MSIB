import React, {} from "react";
import { useNavigate } from "react-router-dom";
import object1 from "../../assets/img/object1.png";
import object2 from "../../assets/img/object2.png";
import object3 from "../../assets/img/object3.png";
import object4 from "../../assets/img/object4.png";

const Productfeature = () => {
  const navigate = useNavigate();

  const handleRegistrasi= () => {
    navigate("/auth/register/toko/form");
  };

  return (
    <div className=" bg-[#243775] ">
      <div className="h-[1000px] mx-auto relative justify-center items-center overflow-hidden ">
        <div className="text-6xl font-bold uppercase text-white px-20 pt-[100px] flex justify-between">
          <div className="headline-2">
          <div className="flex">
            <h1>Kembangkan 
            <span className="text-[#F3B502]"> Produk Lokal </span> <span>Anda Sekarang</span>
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
          <div className="grid grid-cols-4 gap-6">
            <div>
              <a className=" flex flex-col items-center justify-center max-w-[300px] h-[400px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#31499B] text-left absoulte left-0 ">
                <img src={object1} alt="" />
              </a>
              <p className="text-[24px] font-semibold text-white ml-5 pt-10">
                Raih Ulasan Terbaik
              </p>
              <p className="text-[14px] font-regular text-white ml-5 pt-2">
                Ketahui dengan mudah mengenai masukan-masukan yang didapatkan
                untuk produk anda!
              </p>
            </div>

            <div>
              <a className=" flex flex-col items-center justify-center max-w-[300px] h-[400px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#31499B] text-left absoulte left-0 ">
                <img src={object2} alt="" />
              </a>
              <p className="text-[24px] font-semibold text-white ml-2 pt-10">
                Lihat Daftar Pesananmu{" "}
              </p>
              <p className="text-[14px] font-regular text-white ml-2 pt-2">
                Nikmati kemudahan melihat semua transaksi produk-mu secara
                praktis dengan beberapa klik saja.
              </p>
            </div>

            <div>
              <a className=" flex flex-col items-center justify-center max-w-[300px] h-[400px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#31499B] text-left absoulte left-0 ">
                <img src={object3} alt="" />
              </a>
              <p className="text-[24px] font-semibold text-white ml-2 pt-10">
                Tambah Produk di LokaSani
              </p>
              <p className="text-[14px] font-regular text-white ml-2 pt-2">
                Menambah produk dengan mudah dan cepat! Sehingga dapat
                meningkatkan katalog anda dengan efisien{" "}
              </p>
            </div>

            <div className="">
              <a className=" flex flex-col items-center justify-center max-w-[300px] h-[400px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#31499B] text-left absoulte left-0 ">
                <img src={object4} className="h-[300px]" />
              </a>
              <p className="text-[24px] font-semibold text-white ml-2 pt-10">
                RInteraksi dengan Pembeli
              </p>
              <p className="text-[14px] font-regular text-white ml-2 ">
                Tidak hanya untuk berjualan. Bangun hubungan interaksi yang kuat
                dengan para pembeli!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productfeature;
