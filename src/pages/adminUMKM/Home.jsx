import Sidebar from "../../component/adminUMKM/globalComponent/Sidebar";
import Header from "../../component/adminUMKM/globalComponent/Header";
import Penjualan from "../../component/adminUMKM/dashboard/Penjualan";
import ChartPenghasilan from "../../component/adminUMKM/dashboard/ChartPenghasilan";
import ChartHarian from "../../component/adminUMKM/dashboard/ChartHarian";
import Prospek from "../../component/adminUMKM/dashboard/Prospek";
import Statistik from "../../component/adminUMKM/dashboard/Statistik";
import Transaksi from "../../component/adminUMKM/dashboard/Transaksi";
import ProdukPopuler from "../../component/adminUMKM/dashboard/ProdukPopuler";
import InfoiceData from "../../component/adminUMKM/dashboard/InfoiceData";

const Home = () => {
    return (
        <div className="bg-[#F2F2F2] ">
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="w-full ml-[255px]">
                    <div>
                        <Header headerTitle={"Home"}/>
                    </div>
					<div className="flex pt-6 gap-6 px-5">
						<div className="w-2/5">
							<Penjualan />
						</div>
						<div className="w-3/5">
							<Statistik/>
						</div>
					</div>
                    <div className="flex gap-6 w-full px-5 mt-6">
                        <div className="w-2/5">
                            <div>
                                <ChartHarian />
                            </div>
                            <div>
                                <Prospek />
                            </div>
                        </div>
						<div className="w-3/5">
							<ChartPenghasilan />
						</div>
                    </div>
                    <div className="w-full flex gap-6 px-5 mt-6">
                        <div className="w-1/2">
                            <Transaksi/>
                        </div>
                        <div className="w-1/2">
                            <ProdukPopuler/>
                        </div>
                    </div>
                    <div className="w-full px-5 mt-6">
                        <InfoiceData/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
