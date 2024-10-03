/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

function Ticket({ tiket, index, onDelete }) {
  return (
    <div className="mb-4 rounded-md relative flex flex-col px-20 pt-11 pb-8 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-2">
      <div className="flex mb-4">
        <button className="cursor-pointer bg-[#CA9702] hover:bg-yellow-600 text-white py-2 px-4 rounded-full text-sm">
          Workshop
        </button>
        <button className="cursor-pointer bg-[#768DD5] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
          Reguler
        </button>
        <div className="ml-auto">
          <DeleteIcon
            className="cursor-pointer"
            onClick={() => onDelete(index)}
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-sm mb-1">{tiket.namaTiket}</h1>
      <span className="text-[#999999]">{tiket.deskripsiTiket}</span>
      <div className="text-sm flex items-center mb-1">
        <CloseIcon color="primary" />
        <p className="ml-2 text-[#768DD5]">
          <span className="font-semibold">{tiket.jumlahTiket}</span> Tiket mulai
          dijual tanggal{" "}
          <span className="font-semibold">
            {tiket.startDate.toLocaleDateString()}
          </span>{" "}
          | <span>{tiket.startTime.toLocaleTimeString()}</span>
        </p>
      </div>
      <div className="border-b border-dashed border-[#768DD5] mt-1"></div>
      <div className="absolute left-1 top-0 bg-[#CA9702] w-2 h-full ml-2"></div>
      <h1 className="text-3xl font-bold mt-5">Rp.{tiket.hargaTiket}</h1>
    </div>
  );
}

export default Ticket;
