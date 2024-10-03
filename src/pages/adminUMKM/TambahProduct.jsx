import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";
import InformasiProduct from "../../component/adminUMKM/product/InformasiProduct";
import Harga from "../../component/adminUMKM/product/Harga";
// import Varian from "../../component/adminUMKM/product/Varian";
import Media from "../../component/adminUMKM/product/Media";

const TambahProduct = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formDataProduct, setFormDataProduct] = useState({
    name: "",
    category: "",
    total_product: "",
    description: "",
    price: "",
    stock: false,
    image: "",
    status: ""
  })

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormDataProduct({
      ...formDataProduct,
      [name]: newValue
    });
  };

  const postDataProduct = async (status) => {
    try {
      setIsLoading(true)
      const dataToSend = {
        ...formDataProduct,
        status: status
      };
  
      const response = await axios.post('https://657bab26394ca9e4af1498ba.mockapi.io/product', dataToSend);
      console.log('Data berhasil dipost:', response.data);
      setFormDataProduct({
        name: "",
        category: "",
        total_product: "",
        description: "",
        price: "",
        stock: false,
        image: "",
        status: ""
      });
      setIsLoading(false);
      navigate("/adminumkm/daftarproduct")
    } catch (error) {
      console.error('Terjadi kesalahan saat posting data:', error);
      setIsLoading(false)
    }
  };

  const handleResetForm = () => {
    setFormDataProduct({
      name: "",
      category: "",
      total_product: "",
      description: "",
      price: "",
      stock: false,
      image: "",
      status: ""
    });
  }

  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full ml-[255px]">
          <div>
            <Header headerTitle="Tambah Produk" />
          </div>
          <div className="w-full flex justify-between items-center px-6 mt-8">
            <div className="w-full">
              <h1 className="text-xl font-bold">
                Tambahkan Product
              </h1>
              <p className="text-sm">
                Pesanan ditempatkan diseluruh toko anda
              </p>
            </div>
            <div className="flex justify-end items-center gap-3 w-full">
              <button 
                onClick={handleResetForm} 
                className=" border border-slate-200 bg-[#253E8D] text-white rounded-md py-2 px-3"
              >
                Batalkan
              </button>
                { isLoading ?
                  <div className="border border-slate-200 bg-gray-400 text-white rounded-md py-2 px-3">Mengirim data...</div>
                  :
                  <div className="flex gap-3">
                    <button 
                      onClick={() => postDataProduct("dijadwalkan")}
                      className="border border-slate-200 bg-[#253E8D]  text-white rounded-md py-2 px-3"
                    >
                      Simpan
                    </button>
                    <button 
                      onClick={() => postDataProduct("diunggah")} 
                      className="border border-slate-200 bg-[#253E8D]  text-white rounded-md py-2 px-3"
                    >
                      Unggah Product
                    </button>
                  </div>
                  
                }
              
            </div>
          </div>
          <div className="px-6 w-full flex gap-6">
            <div className="w-3/5">
              <div className="w-full">
                <InformasiProduct 
                  valueName={formDataProduct.name}
                  valueKategori={formDataProduct.category}
                  valueJumlah={formDataProduct.total_product}
                  valueDeskripsi={formDataProduct.description}
                  handleFormChange={handleFormChange}
                />
              </div>
              <div className="w-full">
                <Media
                  valueImageURL={formDataProduct.image}
                  handleImageURLChange={handleFormChange}
                />
              </div>
              {/* <div className="w-full">
                <Varian/>
              </div> */}
            </div>
            <div className="w-2/5">
              <div className="w-full">
                <Harga 
                  valueHarga={formDataProduct.price}
                  valueStok={formDataProduct.stock}
                  handleFormChange={handleFormChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahProduct;
