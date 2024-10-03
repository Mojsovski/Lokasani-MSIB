import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import dataDashboard from "../../../data/dataDashboard";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Table = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const offset = currentPage * itemsPerPage;
    const currentItems = dataDashboard.slice(offset, offset + itemsPerPage);

    const totalPages = Math.ceil(dataDashboard.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="bg-white text-black p-6 rounded-lg">
            <div className="mb-6 flex justify-end gap-2">
                <div>
                    <input className="px-4 py-2 w-56 border rounded-lg focus:outline-none" type="text" placeholder="Cari Infoice" />
                </div>
                <div>
                    <select className="px-4 py-2 w-56 border-2 rounded-lg focus:outline-none" name="" id="" >
                        <option value="all" selected>Status</option>
                        <option value="dikirim">Dikirim</option>
                        <option value="dikemas">Dikemas</option>
                        <option value="diterima">Diterima</option>
                    </select>
                </div>
            </div>
            <table className="table-fixed w-full">
                <thead>
                    <tr>
                        <th className="text-left border-t-2 border-b-2 px-4 py-2">ID</th>
                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Status</th>
                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Total</th>
                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td className="border-t-2 border-b-2 px-4 py-2">{item.id}</td>
                            <td className="border-t-2 border-b-2 px-4 py-2">{item.status}</td>
                            <td className="border-t-2 border-b-2 px-4 py-2">Rp {item.total}</td>
                            <td className="border-t-2 border-b-2 px-4 py-2">{item.tanggal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination mt-4">
            <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                previousLabel={<ArrowBackIosIcon fontSize="medium" />}
                nextLabel={<ArrowForwardIosIcon fontSize="medium"/>}
                containerClassName={"pagination flex justify-end gap-2 mt-6 px-6"}
                activeClassName={"bg-gray-800 text-white text-sm px-4 py-2 rounded-lg"}
                pageClassName={"page-item bg-[#CCCCCC] text-white text-sm px-4 py-2 rounded-lg"}
                previousClassName={"flex items-center font-bold text-gray-500"}
                nextClassName={"flex items-center font-bold text-gray-500"}
                breakClassName={"break-item"}
                disabledClassName={"disabled-item"}
                pageLinkClassName={"page-link"}
            />

            </div>
        </div>
    );
};

export default Table;
