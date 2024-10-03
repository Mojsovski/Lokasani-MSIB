import {React, useState} from "react";
import RangeDate from "./RangeDate";
import iconSearch from "../../../assets/icon/search.svg";

const Search = ({ showSearch, showButtonVerif, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-between">
      {showSearch && (
        <div className="flex items-center pl-3 bg-white rounded-lg border border-gray-300">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="">
            <img src={iconSearch} alt="" width={20} />
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-2 text-sm text-gray-900  rounded-lg w-80 bg-white"
            placeholder="Search for items"
            value={searchQuery}
          onChange={handleSearch}
          />
        </div>
      )}
      {showButtonVerif && (
        <div>
          <button className="bg-[#3653B0] w-[150px] h-[30px] rounded-full text-white">
            Verifikasi
          </button>
        </div>
      )}
      <div className="rounded-lg flex items-center gap-2">
        <p className="font-semibold">Tampilkan</p>
        <RangeDate />
      </div>
    </div>
  );
};

export default Search;
