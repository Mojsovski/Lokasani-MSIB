
const Varian = () => {
    return (
        <div className="w-full p-6 bg-white rounded-lg mt-6 mb-6">
            <div className="mb-8">
                <div className="text-black text-xl font-semibold leading-9">
                    Varian
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <div className="mb-2">
                        <label className="font-semibold text-base" htmlFor="opsiUkuran">Opsi</label>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        <div className="w-full">
                            <select 
                                name="opsiUkuran" 
                                id="opsiUkuran"
                                className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                            >
                                <option value="kecil">Kecil</option>
                                <option value="sedang">Sedang</option>
                                <option value="besar">Besar</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                name="kodeBatang"
                                placeholder="01234-5678"
                                className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-fit px-5 py-2 bg-[#253E8D] text-white font-semibold rounded-md cursor-pointer">
                    <p>Tambahkan Opsi Lainnya</p>
                </div>
            </div>
        </div>
    )
};

export default Varian;
