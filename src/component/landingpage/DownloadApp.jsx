import React from "react";
import Img1 from "../../assets/img/dlapp2.png";
import Img2 from "../../assets/img/dlapp2.png";
import Img3 from "../../assets/img/button-dl.png";

function DownloadApp() {
  return (
    <>
      <div className=" h-[900px] mx-auto p-20 relative ">
        <div className="h-4/6 mx-12 mt-36 bg-blue-800 rounded-3xl relative">
          <div className="self-stretch h-[584px] w-auto flex-row justify-start items-start inline-flex ">
            <div className="w-[600px] mx-16 pt-12 ">
              <h3 className="text-5xl font-bold text-white leading-normal">
                Mulai jelajahi <span className="text-yellow-500">produk</span> &
                kegiatan <span className="text-yellow-500">seni lokal </span>
                Indonesia
              </h3>
              <img
                className=" w-[478px] absolute top-96 left-14 "
                src={Img3}
                alt="apps"
              />
            </div>
            <img
              className=" w-[378px] absolute -top-32 right-28 "
              src={Img2}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
