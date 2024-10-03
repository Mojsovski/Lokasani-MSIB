import {useState} from "react";
import PopupInputImage from "./PopupInputImage";
import cameraSearch from "../../../assets/img/camera-search.png"

// eslint-disable-next-line react/prop-types
const Media = ({valueImageURL, handleImageURLChange}) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [isPopupImageOpen, setIsPopupImageOpen] = useState(false);

    const handlePopupUploadImage = () => {
        setIsPopupImageOpen(true);
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="w-full p-6 bg-white rounded-lg mt-5">
            <div className="flex justify-between items-center mb-8">
                <div className="text-black text-xl font-semibold leading-9">Media</div>
                <div>
                    <p
                        onClick={handlePopupUploadImage}
                        className="text-blue-800 text-base font-semibold cursor-pointer"
                    >
                        Tambahkan Media dari URL
                    </p>
                    {isPopupImageOpen && (
                        <PopupInputImage
                            onClose={() => setIsPopupImageOpen(false)}
                            valueImageURL={valueImageURL}
                            handleImageURLChange={handleImageURLChange}
                        />
                    )}
                </div>
            </div>
            <div
                className="w-full h-fit flex flex-col items-center justify-center rounded-lg border-2 border-gray-400"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div className="p-8 rounded-lg text-center">
                {imagePreview ? (
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-60 h-52 mx-auto object-contain"
                    />
                ) : (
                    <>
                    <img
                        src={cameraSearch}
                        alt="img camera"
                        className="mx-auto"
                    />
                        <p className="font-semibold mt-2">Seret dan lepas gambar anda disini atau <br /> <span className="text-gray-400">atau</span></p>
                    </>
                )}
                    <div className="w-full justify-center flex items-center mt-5 gap-3">
                        <label
                            htmlFor="upload"
                            className="bg-[#253E8D] text-white text-sm py-2 px-4 rounded cursor-pointer border-2 border-[#253E8D]"
                        >
                            Jelajahi gambar
                        </label>
                        <input
                            type="file"
                            id="upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Media;
