import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Statistik = () => {
    return (
        <div className="bg-white h-full px-5 py-7 flex flex-col justify-between rounded-lg">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">Statistik</h1>
                <p className="font-semibold">Diperbarui 1 bulan yang lalu</p>
            </div>
            <div className="flex justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-[#253E8D]">
                        <ArrowForwardIosIcon className="text-white font-bold ml-[3px]" fontSize="10px"/>
                    </div>
                    <div>
                        <p className="font-bold">1K</p>
                        <p className="text-lg tracking-wider">Kunjungan</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-[#253E8D]">
                        <ArrowForwardIosIcon className="text-white font-bold ml-[3px]" fontSize="10px"/>
                    </div>
                    <div>
                        <p className="font-bold">9K</p>
                        <p className="text-lg tracking-wider">Produk</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-[#253E8D]">
                        <ArrowForwardIosIcon className="text-white font-bold ml-[3px]" fontSize="10px"/>
                    </div>
                    <div>
                        <p className="font-bold">30K</p>
                        <p className="text-lg tracking-wider">Pembeli</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-[#253E8D]">
                        <ArrowForwardIosIcon className="text-white font-bold ml-[3px]" fontSize="10px"/>
                    </div>
                    <div>
                        <p className="font-bold">Rp50.000.000K</p>
                        <p className="text-lg tracking-wider">Penjualan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistik;
