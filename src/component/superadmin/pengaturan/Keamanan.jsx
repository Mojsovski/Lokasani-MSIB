import React from "react";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const Keamanan = () => {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="w-2/3 gap-5">
        <div className="flex justify-start">
          <h5 className="mb-1 text-xl font-semibold  text-gray-900 ">
            Keamanan
          </h5>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
          <div className="flex justify-between pr-6 ">
            <div className="flex flex-col items-start">
              <p className="text-lg text-black">Kata Sandi</p>
              <p>Ubah Kata Sandi</p>
            </div>
            <div className="flex">
              <p className="text-sm">.....</p>
              <ArrowForwardIos
                fontSize="medium"
                className="text-[#3653B0]  cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0"></hr>
          <div className="flex justify-between pr-6 ">
            <div className="flex flex-col items-start">
              <p className="text-lg text-black">Autentikasi Dua Faktor</p>
              <p>Aktifkan Autentikasi Dua Faktor</p>
            </div>
            <label className="relative items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              
            </label>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
        </div>
      </div>
    </div>
  );
};

export default Keamanan;
