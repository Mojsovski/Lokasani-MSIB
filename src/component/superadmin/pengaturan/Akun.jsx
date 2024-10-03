import React from "react";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const Akun = () => {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="w-2/3 gap-5">
        <div className="flex justify-start gap-5">
          <div>
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col mt-4 md:mt-6">
            <h5 className="mb-1 text-xl font-semibold  text-gray-900 ">
              Kelvin Braman
            </h5>
            <a
              href="#"
              className="items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Edit Provile
            </a>
          </div>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
          <div className="flex justify-between pr-6 ">
            <p>Nomor Telepon</p>
            <div className="flex">
              <p>082233445577</p>
              <ArrowForwardIos
                fontSize="medium"
                className="text-[#3653B0]  cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
          <div className="flex justify-between pr-6 ">
            <p>Email</p>
            <div className="flex">
              <p>Kelvin@lokasani.co.id</p>
              <ArrowForwardIos
                fontSize="medium"
                className="text-[#3653B0]  cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
          <div className="flex justify-between pr-6 ">
            <p>Lokasi</p>
            <div className="flex">
              <p>jakarta Indonesia</p>
              <ArrowForwardIos
                fontSize="medium"
                className="text-[#3653B0]  cursor-pointer"
              />
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
        </div>
      </div>
    </div>
  );
};

export default Akun;
