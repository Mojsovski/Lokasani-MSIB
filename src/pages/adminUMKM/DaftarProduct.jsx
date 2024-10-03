import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from 'axios';
import Swal from 'sweetalert2'
import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DaftarProduct = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const [products, setProducts] = useState([]);
    const [statusFilter, setStatusFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [stockFilter, setStockFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formDataProduct, setFormDataProduct] = useState({
        name: "",
        category: "",
        total_product: "",
        description: "",
        price: "",
        stock: false,
        image: "",
        status: ""
    });
    const [productIdToEdit, setProductIdToEdit] = useState(null)

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://657bab26394ca9e4af1498ba.mockapi.io/product')
            setProducts(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage]);

    const handleDeleteProduct = async (productId) => {
        const confirmation = await Swal.fire({
            title: 'Are you sure?',
            text: 'Konfirmasi menghapus data product',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
    
        if (confirmation.isConfirmed) {
            try {
                await axios.delete(`https://657bab26394ca9e4af1498ba.mockapi.io/product/${productId}`);
                fetchProducts();
                await Swal.fire('Deleted!', 'data berhasil dihapus', 'success');
            } catch (error) {
                console.error('Gagal menghapus data:', error.ressponse.data);
                await Swal.fire('Error!', 'gagal menghapus data', 'error');
            }
        }
    };

    const handleEditProduct = (product) => {
        setFormDataProduct({
            name: product.name,
            category: product.category,
            total_product: product.total_product,
            description: product.description,
            price: product.price,
            stock: product.stock,
            image: product.image,
            status: product.status
        });
        setProductIdToEdit(product.id);
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = async () => {
        try {
            await axios.put(`https://657bab26394ca9e4af1498ba.mockapi.io/product/${productIdToEdit}`, formDataProduct);
            setIsEditModalOpen(false);
            fetchProducts();
            await Swal.fire('Updated!', 'Data berhasil diperbarui', 'success');
        } catch (error) {
            console.error('Terjadi kesalahan saat menyimpan perubahan:', error);
        }
    };

    const filteredProducts = products.filter((item) => {
        const filterByStatus = statusFilter === 'all' || item.status === statusFilter;
        const filterByCategory = categoryFilter === 'all' || item.category === categoryFilter;
        const filterByStock = stockFilter === 'all' || (stockFilter === 'true' ? item.stock : !item.stock);
        const filterBySearch = searchTerm.length === 0 || item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return filterByStatus && filterByCategory && filterByStock && filterBySearch;
    });
    
    

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredProducts.slice(offset, offset + itemsPerPage);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
        setCurrentPage(0);
    };

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
        setCurrentPage(0);
    };

    const handleStockChange = (e) => {
        setStockFilter(e.target.value);
        setCurrentPage(0);
    };

    return (
        <div className="bg-[#F2F2F2]">
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="w-full ml-[255px]">
                    <div>
                        <Header headerTitle="Daftar Product" />
                    </div>
                    <div className="bg-white m-6 p-6">
                        <div className="mb-8">
                            <h1 className="text-xl font-bold">Filter</h1>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between gap-6 mb-5">
                                <select 
                                    className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                                    name="status"
                                    id="status"
                                    onChange={handleStatusChange}
                                    value={statusFilter}
                                >
                                    <option value="all">Semua</option>
                                    <option value="diunggah">Diunggah</option>
                                    <option value="dijadwalkan">Dijadwalkan</option>
                                    <option value="tidak aktif">Tidak Aktif</option>
                                </select>
                                <select 
                                    className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                                    name="kategori"
                                    id="kategori"
                                    onChange={handleCategoryChange}
                                    value={categoryFilter}
                                >
                                    <option value="all">Semua</option>
                                    <option value="handmade">Handmade</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="buku">Buku</option>
                                    <option value="3D">3D</option>
                                </select>
                                <select 
                                    className="w-full py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                                    name="stok"
                                    id="stok"
                                    onChange={handleStockChange}
                                    value={stockFilter}
                                >
                                    <option value="all">Semua</option>
                                    <option value="true">Tersedia</option>
                                    <option value="false">Tidak Tersedia</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Cari Produk"
                                        className="w-64 py-2 px-3 border-2 border-gray-400 rounded-lg focus:outline-none"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div> 
                                <div>
                                    <a href="/adminumkm/tambahproduct" className="bg-[#253E8D] text-white rounded-md py-2 px-3">Tambah Product</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2 w-[25%]">Produk</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Kategori</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Stok</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Harga</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Jumlah</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Status</th>
                                        <th className="text-left border-t-2 border-b-2 px-4 py-2">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td className="border-t-2 border-b-2 px-4 py-2">
                                                <div className="flex items-center gap-3">
                                                    <img src={item.image} className="w-10 h-10 object-cover rounded-lg"></img>
                                                    <div>
                                                        <p className="font-semibold">{item.name}</p>
                                                        <p className="font-light text-sm">{item.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">{item.category}</td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">
                                                {item.stock ? (
                                                    <label
                                                        htmlFor="buttonStock"
                                                        className="bg-[#253E8D] transition duration-300 w-9 h-6 rounded-full cursor-pointer flex items-center"
                                                    >
                                                        <div
                                                            className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out translate-x-4"
                                                        ></div>
                                                    </label>
                                                ) : (
                                                    <label
                                                        htmlFor="buttonStock"
                                                        className="bg-gray-300 transition duration-300 w-9 h-6 rounded-full cursor-pointer flex items-center"
                                                    >
                                                        <div
                                                            className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out translate-x-1"
                                                        ></div>
                                                    </label>
                                                )}
                                            </td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">{item.price}</td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">{item.total_product}</td>
                                            <td className="border-t-2 border-b-2 px-4 py-2">
                                                <p
                                                    className={`block w-fit text-white px-3 py-1 rounded-lg ${
                                                    item.status === "tidak aktif"
                                                        ? "bg-[#b3c7f9]"
                                                        : item.status === "dijadwalkan"
                                                        ? "bg-yellow-500"
                                                        : item.status === "diunggah"
                                                        ? "bg-[#267360]"
                                                        : "text-black"
                                                    }`}
                                                >
                                                    {item.status}
                                                </p>
                                            </td>
                                            <td className="items-center border-t-2 border-b-2 px-4 py-2 cursor-pointer">
                                                <div className="flex gap-2 items-center">
                                                    <button onClick={() => handleDeleteProduct(item.id)}>
                                                        <DeleteOutlineIcon/>
                                                    </button>
                                                    <button onClick={() => handleEditProduct(item)}>
                                                        <EditIcon fontSize="small"/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                            {isEditModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center z-50">
                                    <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={() => setIsEditModalOpen(false)}></div>
                                    <div className="w-2/6 bg-white p-4 rounded-lg z-[60]">
                                        <h2 className="text-xl font-semibold mb-3">Edit Data</h2>
                                        <div className="mb-2">
                                            <label className="block font-semibold mb-1">Nama Produk</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formDataProduct.name}
                                                onChange={(e) => setFormDataProduct({ ...formDataProduct, name: e.target.value })}
                                                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label className="block font-semibold mb-1">Deskripsi Produk</label>
                                            <textarea
                                                name="description"
                                                value={formDataProduct.description}
                                                onChange={(e) => setFormDataProduct({ ...formDataProduct, description: e.target.value })}
                                                rows="2"
                                                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none overflow-auto"
                                            >
                                            </textarea>
                                        </div>
                                        <div className="mb-2 flex gap-3 w-full">
                                            <div className="w-full">
                                                <label className="block font-semibold mb-1">Jumalah Produk</label>
                                                <input
                                                    type="text"
                                                    name="total_product"
                                                    value={formDataProduct.total_product}
                                                    onChange={(e) => setFormDataProduct({ ...formDataProduct, total_product: e.target.value })}
                                                    className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <label className="block font-semibold mb-1">Kategori</label>
                                                <select 
                                                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none" 
                                                    name="category" 
                                                    id="kategori"
                                                    value={formDataProduct.category}
                                                    onChange={(e) => setFormDataProduct({ ...formDataProduct, category: e.target.value })}
                                                >
                                                    <option value="handmade">HandMade</option>
                                                    <option value="fashion">Fashion</option>
                                                    <option value="buku">Buku</option>
                                                    <option value="3D">3D</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-2 flex gap-3">
                                            <div className="w-full">
                                                <label className="block font-semibold mb-1">Harga</label>
                                                <input
                                                    type="text"
                                                    id="harga"
                                                    name="price"
                                                    value={formDataProduct.price}
                                                    onChange={(e) => setFormDataProduct({ ...formDataProduct, price: e.target.value })}
                                                    className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <label className="block font-semibold mb-1">Stok</label>
                                                <select 
                                                    className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none" 
                                                    name="stock" 
                                                    id="stok"
                                                    value={formDataProduct.stock}
                                                    onChange={(e) => setFormDataProduct({ ...formDataProduct, stock: e.target.value })}
                                                >
                                                    <option value="true">Tersedia</option>
                                                    <option value="false">Tidak Tersedia</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            
                                        </div>
                                        <div className="mb-2">
                                            <label className="block font-semibold mb-1">Status</label>
                                            <select 
                                                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none"
                                                name="status"
                                                id="status"
                                                value={formDataProduct.status}
                                                onChange={(e) => setFormDataProduct({ ...formDataProduct, status: e.target.value })}
                                            >
                                                <option value="diunggah">Diunggah</option>
                                                <option value="dijadwalkan">Dijadwalkan</option>
                                                <option value="tidak aktif">Tidak Aktif</option>
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <label className="block font-semibold mb-1">URL Gambar</label>
                                            <input
                                                type="text"
                                                id="image"
                                                name="image"
                                                value={formDataProduct.image}
                                                onChange={(e) => setFormDataProduct({ ...formDataProduct, image: e.target.value })}
                                                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none"
                                            />
                                        </div>
                                        <div className="flex justify-end">
                                            <button onClick={() => setIsEditModalOpen(false)} className="bg-red-500 hover-bg-red-600 px-2 py-1 cursor-pointer rounded-lg text-white mr-2">
                                                Batal
                                            </button>
                                            <button onClick={handleSaveEdit} className="bg-[#253E8D] hover-bg-yellow-600 px-2 py-1 cursor-pointer rounded-lg text-white">
                                                Simpan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaftarProduct;
