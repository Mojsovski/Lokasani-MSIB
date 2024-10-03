import React from "react";

const ProdukPopuler = () => {
    return (
        <div className="bg-white text-black p-6 rounded-lg">
            <div className="mb-4">
                <h1 className="text-xl font-bold">Produk Populer</h1>
            </div>
            <div>
                <ul>
                    <li className="mb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-[#253E8D] rounded-lg"></div>
                                <div>
                                    <p className="font-semibold text-base tracking-wider">Kain Batik</p>
                                    <p className="font-light text-sm tracking-wider">Item : D7lF10</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-gray-500 tracking-wider">-Rp100.000,00</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-[#253E8D] rounded-lg"></div>
                                <div>
                                    <p className="font-semibold text-base tracking-wider">Lukisan</p>
                                    <p className="font-light text-sm tracking-wider">Item : D7lF10</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-gray-500 tracking-wider">+Rp80.000,00</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-[#253E8D] rounded-lg"></div>
                                <div>
                                    <p className="font-semibold text-base tracking-wider">Kerajinan</p>
                                    <p className="font-light text-sm tracking-wider">Item : D7lF10</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-gray-500 tracking-wider">-Rp100.000,00</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-[#253E8D] rounded-lg"></div>
                                <div>
                                    <p className="font-semibold text-base tracking-wider">Baju Batik</p>
                                    <p className="font-light text-sm tracking-wider">Item : D7lF10</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-gray-500 tracking-wider">+Rp80.000,00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProdukPopuler;
