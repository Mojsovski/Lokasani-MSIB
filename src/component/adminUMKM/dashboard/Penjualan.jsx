import Saly from "../../../assets/img/Saly.svg";

const Penjualan = () => {
  return (
    <div className="bg-white text-black rounded-lg">
      <div className="flex justify-between items-center pl-5">
        <div>
          <div className="mb-4">
            <h1 className="text-xl font-bold">Selamat datang John</h1>
            <p className="text-lg">Penjualan terbaik bulan ini</p>
          </div>
          <div className="mb-2">
            <span className="font-bold text-blue-800 tracking-wide">Rp 100.000,00</span>
          </div>
          <button className="bg-blue-800 text-white w-full py-2 rounded-md">
            Lihat Penjualan
          </button>
        </div>
        <div>
            <img src={Saly} alt="Saly" />
        </div>
      </div>
    </div>
  );
};

export default Penjualan;
