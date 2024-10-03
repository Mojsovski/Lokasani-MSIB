// import { useState } from "react";
// import PopupInputCSV from "./PopupInputCSV";

// eslint-disable-next-line react/prop-types
const InformasiProduct = ({valueName, valueKategori, valueJumlah, valueDeskripsi, handleFormChange}) => {
  // const [isPopupCSVOpen, setIsPopupCSVOpen] = useState(false);

  // const handlePopupUploadCSV = () => {
  //   setIsPopupCSVOpen(true);
  // }

  return (
    <div className="w-full p-6 bg-white rounded-lg mt-5">
      <div className="flex justify-between items-center mb-8">
        <div className="text-black text-xl font-semibold leading-9">
          Informasi Produk
        </div>
        {/* <div>
          <p
            onClick={handlePopupUploadCSV}
            className="text-blue-800 text-base font-semibold cursor-pointer"
          >
              Tambahkan Produk Dari CSV
          </p>
          {isPopupCSVOpen && (
              <PopupInputCSV
              onClose={() => setIsPopupCSVOpen(false)}
              />
          )}
        </div> */}
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <label className="font-semibold text-base" htmlFor="productName">Nama</label>
        </div>
        <input
          type="text"
          id="productName"
          name="name"
          placeholder="Nama Product"
          value={valueName}
          onChange={handleFormChange}
          className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center gap-6 mb-4">
        <div className="w-full">
          <div className="mb-2">
            <label className="font-semibold text-base" htmlFor="sku">Kategori</label>
          </div>
          <select 
            className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none" 
            name="category" 
            id="kategori"
            value={valueKategori}
            onChange={handleFormChange}
          >
            <option value="handmade">HandMade</option>
            <option value="fashion">Fashion</option>
            <option value="buku">Buku</option>
            <option value="3D">3D</option>
          </select>
        </div>
        <div className="w-full">
          <div className="mb-2">
            <label className="font-semibold text-base" htmlFor="jumlah">Jumlah Product</label>
          </div>
          <input
            type="text"
            name="total_product"
            placeholder="5"
            className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
            value={valueJumlah}
            onChange={handleFormChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-2">
            <label className="font-semibold text-base" htmlFor="deskripsi">Deskripsi Product</label>
          </div>
          <textarea
            name="description"
            placeholder="Deskripsi Singkat"
            id="deskrisi"
            rows="7"
            className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none overflow-auto"
            value={valueDeskripsi}
            onChange={handleFormChange}
          >
          </textarea>
      </div>
    </div>
  );
};

export default InformasiProduct;
