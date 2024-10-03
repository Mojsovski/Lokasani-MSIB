import React from "react";

const Transaksi = () => {
    return (
        <div className="bg-white text-black p-6 rounded-lg">
            <div className="mb-4">
                <h1 className="text-xl font-bold">Transaksi</h1>
            </div>
            <div>
                <ul>
                    <li className="mb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-[#253E8D] rounded-lg"></div>
                                <div>
                                    <p className="font-semibold text-base tracking-wider">E-Wallet</p>
                                    <p className="font-light text-sm tracking-wider">Dana</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-red-500 tracking-wider">-Rp100.000,00</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-[#253E8D] rounded-lg"></div>
                                <div>
                                    <p className="font-semibold text-base tracking-wider">Bank Transfer</p>
                                    <p className="font-light text-sm tracking-wider">Tambah Uang</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-green-500 tracking-wider">+Rp80.000,00</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-[#253E8D] rounded-lg"></div>
                                <div>
                                    <p className="font-semibold text-base tracking-wider">E-Wallet</p>
                                    <p className="font-light text-sm tracking-wider">Dana</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-red-500 tracking-wider">-Rp100.000,00</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-[#253E8D] rounded-lg"></div>
                                <div>
                                    <p className="font-semibold text-base tracking-wider">Bank Transfer</p>
                                    <p className="font-light text-sm tracking-wider">Tambah Uang</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-green-500 tracking-wider">+Rp80.000,00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Transaksi;
