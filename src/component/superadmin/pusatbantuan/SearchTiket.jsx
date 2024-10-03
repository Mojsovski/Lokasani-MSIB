import React from "react";
import iconSearch from "../../../assets/icon/search.svg";

const SearchTiket = ({ searchTerm, setSearchTerm, searchFilter }) => {
  return (
    <div className="w-[600px] h-14 bg-white rounded-lg shadow justify-start items-center  inline-flex">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="ml-5">
        <img src={iconSearch} alt="" width={24} />
      </div>
      <input
        type="text"
        id="table-search"
        className="block p-3 pl-2 text-base text-gray-900 w-96 bg-white"
        placeholder="Cari Nomor Tiket"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchTiket;
