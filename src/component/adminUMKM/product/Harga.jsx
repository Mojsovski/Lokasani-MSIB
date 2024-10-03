import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Harga = ({valueHarga, valueStok, handleFormChange}) => {
  const [isButtonStoctChecked, setIsButtonStockChecked] = useState(false);

  const handleToggleButtonStock = () => {
    setIsButtonStockChecked(!isButtonStoctChecked);
};

  return (
    <div className="w-full p-6 bg-white rounded-lg mt-5">
      <div className="mb-8">
        <div className="text-black text-xl font-semibold leading-9">
          Harga
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <label className="font-semibold text-base" htmlFor="harga">Harga</label>
        </div>
        <input
          type="text"
          id="harga"
          name="price"
          placeholder="Harga Product"
          className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
          value={valueHarga}
          onChange={handleFormChange}
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <p className={`font-semibold text-sm ${isButtonStoctChecked ? "text-black" : "text-gray-400"}`}>Terdapat Stok</p>
          </div>
          <div>
          <label
            htmlFor="buttonStock"
            className={`block ${isButtonStoctChecked ? "bg-[#253E8D]" : "bg-gray-300"} transition duration-300 w-12 h-7 rounded-full cursor-pointer flex items-center`}
          >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${isButtonStoctChecked ? 'translate-x-6' : 'translate-x-1'}`}
          ></div>
          </label>
          <input
            name="stock"
            id="buttonStock"
            type="checkbox"
            className="hidden"
            value={valueStok}
            checked={isButtonStoctChecked}
            onChange={(e) => {
              handleToggleButtonStock();
              handleFormChange(e);
            }}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harga;
