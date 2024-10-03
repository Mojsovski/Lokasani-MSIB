import React from "react";
import { Link } from "react-router-dom";

const CardUser = ({ name, quantity,link, showCardButton }) => {
  return (
    <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg  gap-9">
      <div>
      <p className="font-normal text-gray-700 dark:text-gray-400">{name}</p>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {quantity}
      </h5></div>
      <div className="flex justify-end">
      {showCardButton && (<Link to={link} className="bg-[#3653B0] hover:bg-[#768DD5] flex justify-center items-center text-white pb-0 w-1/3 h-10 rounded-full"> <button>Kelola</button> </Link>)}</div>
    </div>
  );
};

export default CardUser;
