import { react } from "react";
import imageSearching from "../../../assets/img/image-searching.png";

// eslint-disable-next-line react/prop-types
const PopupInputImage = ({ onClose, valueImageURL, handleImageURLChange  }) => {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-40">
                <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>
                <div
                    className="w-2/6 bg-white p-4 rounded-lg z-50"
                >
                    <h1 className="text-xl font-semibold mb-3 pb-2 border-b-2">Pilih Gambar untuk diunggah</h1>
                    <div className="rounded-lg text-center">
                        <img
                            src={imageSearching}
                            alt="Searching"
                            className="w-60 h-52 mx-auto"
                        />
                    </div>
                    <div className="flex justify-center items-center my-3">
                        <label
                            htmlFor="uploadImage"
                            className="font-bold cursor-pointer"
                        >
                            Unggah file
                        </label>
                    </div>
                    <div>
                        <h3 className="font-semibold">Atau tambahkan dari URL</h3>
                        <div className="mt-2 flex gap-3">
                            <input
                                name="image"
                                className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none" 
                                type="text" 
                                placeholder="https://lokasani..."
                                value={valueImageURL}
                                onChange={handleImageURLChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupInputImage;
