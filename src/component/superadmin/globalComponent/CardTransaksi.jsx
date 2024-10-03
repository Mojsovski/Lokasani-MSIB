import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NorthIcon from "@mui/icons-material/North";

const CardUser = ({ judul, quantity }) => {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-xl border border-stroke bg-white px-3 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1 ">
      <div className="">
        <div className="bg-[#026C52] h-[45px] w-[45px] rounded-full flex items-center justify-center">
          <ArrowForwardIosIcon className="h-[30px] w-[30px] text-white" />
        </div>

        <p className="text-[10px] text-gray-700   dark:text-gray-400 pt-4">
          {judul}
        </p>
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
          {quantity}
        </h5>
        <p className="flex items-center  text-sm font-medium mb-8">
          <NorthIcon className="text-green-600" />
          <span className=" px-1 text-[20px] text-green-600">+2%</span>
          <span className="text-gray-500">than last week</span>
        </p>
      </div>
    </div>
  );
};

export default CardUser;
