import { useState } from "react";
import fileSearching from "../../../assets/img/file-searching.png"

// eslint-disable-next-line react/prop-types
const PopupInputCSV = ({ onFileChange, onClose }) => {
    const [csvPreview, setCSVPreview] = useState(null);
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCSVPreview(reader.result);
                setIsFileUploaded(true);
            };
            reader.readAsDataURL(file);
            onFileChange(file);
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
                setCSVPreview(reader.result);
                setIsFileUploaded(true);
            };
            reader.readAsDataURL(file);
            onFileChange(file);
        }
    };

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-30">
                <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>
                <div className="w-2/6 bg-white p-4 rounded-lg z-40" onDragOver={handleDragOver} onDrop={handleDrop}>
                    <h1 className="text-xl font-semibold mb-3 pb-2 border-b-2">Pilih File CSV untuk diunggah</h1>
                    <div className="rounded-lg text-center">
                    {!isFileUploaded && (
                        <img src={fileSearching }alt="file searching" className="w-32 h-32 mx-auto" />
                    )}
                    {csvPreview ? <p>Nama file: {csvPreview.name || "File"} </p> : <p>Seret dan lepas file CSV Anda di sini atau</p>}
                    </div>
                    <div className="flex justify-center items-center my-3">
                        <label
                            htmlFor="uploadCSV" 
                            className="font-bold cursor-pointer"
                        >
                            Unggah FIle
                        </label>
                        <input 
                            type="file" 
                            id="uploadCSV"
                            className="hidden"
                            accept=""
                            onChange={handleFileChange}
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold">Atau tambahkan dari URL</h3>
                        <div className="mt-2 flex gap-3">
                            <input className="w-7/12 px-4 py-2 rounded-lg border-2 focus:outline-none" type="text" placeholder="https://lokasani..."/>
                            <button className="w-5/12 px-4 py-2 rounded-lg focus:outline-none text-white bg-[#253E8D]">Tambahkan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupInputCSV;
